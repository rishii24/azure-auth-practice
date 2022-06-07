export const msalConfig = {
    auth: {
      clientId: "9dfce71d-5a21-4ba5-8dfc-657e12034edb",
      authority: "https://login.microsoftonline.com/83ce6924-5bf7-417e-9afc-c19d8b6dc008", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://react-blog-app-312818.web.app/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
  };