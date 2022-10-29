const loadCookieBotScript = (callback: () => void): void => {
  const existingScript = document.querySelector('#cookieBot');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src =
      'https://consent.cookiebot.com/uc.js?cbid=84d4613f-634e-4d24-8df5-027c37741dc4';
    script.id = 'cookieBot';
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      if (callback) callback();
    });
  }
  if (existingScript && callback) callback();
};

export { loadCookieBotScript };
