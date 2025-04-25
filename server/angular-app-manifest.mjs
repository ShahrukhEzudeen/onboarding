
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ShahrukhEzudeen.github.io/PaymenyGateways/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PaymenyGateways"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23613, hash: '21764016a5613f632d0b0bacfbe459eed4a49d3383b1ae15aecdbcd85eb0b577', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17187, hash: '1ea40dd42db8ecb30fce77733cf9562d83a43cb7ce29fc8a0c632a3b08a15397', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29812, hash: '09317b8de8ca2a2968e75d2ebd89bc7892a9f894cb101ec113d885a50a6248bf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
