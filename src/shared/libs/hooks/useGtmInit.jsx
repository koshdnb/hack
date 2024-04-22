const scriptExists = (url) => {
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length; i--;) {
        if (scripts[i].src == url) {
            return true;
        }
    }

    return false;
};

export const init = (({ window, document, script = 'script', layer = 'dataLayer', id }) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start':new Date().getTime(), event:'gtm.js' });
    const dl = layer !== 'dataLayer' ? '&l=' + layer : '';
    const scr = 'https://www.googletagmanager.com/gtm.js?id=' + id + dl;
    if (!scriptExists(scr)){
        const firstScript = document.getElementsByTagName(script)[0],
            jtmScript = document.createElement('script');
        jtmScript.async = true;
        jtmScript.src = scr;
        firstScript?.parentNode?.insertBefore(jtmScript, firstScript);
    }
});
