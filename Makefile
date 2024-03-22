# Kubernetes context
KUBE_CONTEXT ?= docker-for-desktop

# Kubernetes namespace
KUBE_NAMESPACE ?= web

# Kubernetes release
KUBE_RELEASE ?= event-options-promo

# Kubernetes chart dir
KUBE_CHART_DIR ?= "$(shell pwd)/.helm"

# Kubernetes image tag
KUBE_IMAGE_TAG ?= $(shell git rev-parse --abbrev-ref HEAD)

# Kubernetes values file name
KUBE_VALUES_FILE_NAME ?= localhost.yaml

# Kubernetes path to kube config
KUBE_CONFIGFILE ?= /tmp/kubeconfig

.PHONY: kube-check
kube-check:
	@echo "Check config"
	@(test -z "$(AD_LOGIN)" && echo "Specify AD_LOGIN variable. See .env.dist") || true
	@(test -z "$(AD_PASSWORD)" && echo "Specify AD_PASSWORD variable. See .env.dist") || true
	@(test -z "$(KUBE_LOGIN_URL)" && echo "Specify KUBE_LOGIN_URL variable. See .env.dist") || true
	@(test -z "$(KUBE_CONFIGFILE)" && echo "Specify KUBE_CONFIGFILE variable. See .env.dist") || true
	@(test -z "$(KUBE_CONTEXT)" && echo "Specify KUBE_CONTEXT variable. See .env.dist") || true
	@(test -z "$(KUBE_NAMESPACE)" && echo "Specify KUBE_NAMESPACE variable. See .env.dist") || true
	@(test -z "$(KUBE_RELEASE)" && echo "Specify KUBE_RELEASE variable. See .env.dist") || true
	@(test -z "$(KUBE_CHART_DIR)" && echo "Specify KUBE_CHART_DIR variable. See .env.dist") || true
	@(test -z "$(KUBE_IMAGE_TAG)" && echo "Specify KUBE_IMAGE_TAG variable. See .env.dist") || true
	@(test -z "$(KUBE_VALUES_FILE_NAME)" && echo "Specify KUBE_VALUES_FILE_NAME variable. See .env.dist") || true

.PHONY: kube-login # Auth and create a new tmp kuber config file with context
kube-login: kube-check
	@echo "Auth and Create new kubeconfig"
	@curl --fail --data-urlencode "login=$(AD_LOGIN)" --data-urlencode "password=$(AD_PASSWORD)" $(KUBE_LOGIN_URL)/config/token -o $(KUBE_CONFIGFILE)

.PHONY: kube-dep # Install Helm chart dependencies
kube-dep:
	@echo "Add helm repository"
	@helm repo add iqoption https://artifactory.mobbtech.com/helm
	@helm repo update
	@echo "Install chart dependencies"
	@cd "$(KUBE_CHART_DIR)" && helm dep build

.PHONY: kube-deploy
kube-deploy:
	@echo "Deploy to kubernetes"
	@helm upgrade $(KUBE_RELEASE) "$(KUBE_CHART_DIR)" \
		--debug \
		--install \
		--kubeconfig $(KUBE_CONFIGFILE) \
		--namespace $(KUBE_NAMESPACE) \
		--set image.tag="$(KUBE_IMAGE_TAG)" \
		--timeout 600s \
		--values "$(KUBE_CHART_DIR)/values/$(KUBE_VALUES_FILE_NAME)" \
		--atomic

.PHONY: kube-cleanup
kube-cleanup: kube-check
	@echo "Cleanup kubernetes"
	@helm ls \
		--all \
		--short \
		--namespace $(KUBE_NAMESPACE) \
		--kubeconfig $(KUBE_CONFIGFILE)
	| grep "$(KUBE_RELEASE)" \
	| xargs -I {} helm uninstall {} \
		--namespace $(KUBE_NAMESPACE) \
		--kubeconfig $(KUBE_CONFIGFILE)

.PHONY: minikube-check
minikube-check:
	@echo "Check config"
	@(test -z "$(KUBE_CONTEXT)" && echo "Specify KUBE_CONTEXT variable. See .env.dist") || true
	@(test -z "$(KUBE_NAMESPACE)" && echo "Specify KUBE_NAMESPACE variable. See .env.dist") || true
	@(test -z "$(KUBE_RELEASE)" && echo "Specify KUBE_RELEASE variable. See .env.dist") || true
	@(test -z "$(KUBE_CHART_DIR)" && echo "Specify KUBE_CHART_DIR variable. See .env.dist") || true
	@(test -z "$(KUBE_IMAGE_TAG)" && echo "Specify KUBE_IMAGE_TAG variable. See .env.dist") || true
	@(test -z "$(KUBE_VALUES_FILE_NAME)" && echo "Specify KUBE_VALUES_FILE_NAME variable. See .env.dist") || true

.PHONY: minikube-ns
minikube-ns: minikube-check
	@echo "Upsert namespace"
	@kubectl --context $(KUBE_CONTEXT) get ns $(KUBE_NAMESPACE) || kubectl --context $(KUBE_CONTEXT) create ns $(KUBE_NAMESPACE)
	@echo "Configure namespace"
	@kubectl --context $(KUBE_CONTEXT) apply -f .kube-ns-configuration.yml

.PHONY: minikube-dashboard
minikube-dashboard: minikube-check
	@echo "Setup dashboard"
	@kubectl apply \
		--context $(KUBE_CONTEXT) \
		-f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
	@pkill "kubectl" || true
	@kubectl proxy &
	@open "http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/"

.PHONY: minikube-token
minikube-token: minikube-check
	@echo "Access token"; \
	KUBE_SECRET=$$(kubectl get serviceaccount default --context $(KUBE_CONTEXT) --output jsonpath='{.secrets[0].name}'); \
	echo $$(kubectl get secret $$KUBE_SECRET --context $(KUBE_CONTEXT) --output jsonpath="{.data.token}" | base64 --decode)

.PHONY: minikube-conf
minikube-conf: minikube-check minikube-ns minikube-dashboard minikube-token
