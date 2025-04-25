
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ShahrukhEzudeen.github.io/onboarding/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/onboarding"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23608, hash: '5d44372bdd35e531d9902b2d263c773f812b6bc86f19be1269147fb7f6446934', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17182, hash: 'f5862d23110fed1f36a2db98a73616260e81f5af34cb5b18648d45cb84a774b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29807, hash: '2b63a3f426f650643b8bd6fd0bae2f8e13f78f5e32372784e7aa98aec6411870', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
