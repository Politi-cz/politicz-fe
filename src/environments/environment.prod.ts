export const environment = {
  production: true,

  assetsPath: 'assets/i18n/',
  assetsPartyLogosPath: 'assets/party-logos/',

  apiUrl: 'https://virtserver.swaggerhub.com/kollermartin/politicz/1.0.0',

  auth: {
    domain: 'dev-zu5pzoxyf4a2amfg.us.auth0.com',
    clientId: 'mgQUdiVLoVdejanEtTx7OHqSVk9aJ5sx',
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: 'https://politi.cz',
    },
  },
};
