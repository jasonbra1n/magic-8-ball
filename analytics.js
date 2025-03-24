// Tracking ID  use: ' '
const TRACKING_ID = 'G-HTQLXY0B6E';

// Google Analytics setup (won’t load or track without a valid ID)
if (TRACKING_ID) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', TRACKING_ID);
}
