
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ShahrukhEzudeen.github.io/PaymentGateways/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PaymentGateways"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23613, hash: '682699e7a6be64df7db8f54ac4447c9e2df6c4b391623e9db9e32a92e60a056c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17187, hash: 'f473897e021103e58d87eb556fa1b446aa51e8d11049db6ec91436aca2de51a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29812, hash: '6ba5b3b09d982c2e5b35b2131bc8bae8e2f830dfef7322026d4ddd6e45b49458', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
