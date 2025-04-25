
export default {
  basePath: 'https://ShahrukhEzudeen.github.io/PaymenyGateways',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
