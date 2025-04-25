
export default {
  basePath: 'https://ShahrukhEzudeen.github.io/PaymentGateways',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
