{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/* Render environment variables */}}
{{- define "env" }}
env:
  - name: NODE_SHORT_NAME
    valueFrom:
      fieldRef:
        apiVersion: v1
        fieldPath: spec.nodeName
  - name: POD_NAME
    valueFrom:
      fieldRef:
        fieldPath: metadata.name
{{- end -}}

{{/* Render image */}}
{{- define "image" }}
image: {{ .Values.image.repository }}:{{ .Values.image.tag }}
imagePullPolicy: {{ .Values.image.pullPolicy }}
{{- end -}}

{{/* Render resources */}}
{{- define "resources" }}
resources:
{{ .resources | toYaml | indent 2 -}}
{{- end -}}
