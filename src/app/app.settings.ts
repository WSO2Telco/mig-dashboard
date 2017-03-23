export class AppSettings {
   public static APP_ID = 'bVU60zFM1SlMufyxGyj6LbPSIcMa';
   public static REDIRECT_URI = 'http://localhost:3000/login';
   public static AUTH_URL = 'https://localhost:9443/authproxy/oauth2/authorize/operator/spark';

   public static getAuthUrl(msisdn:string):string{
     return this.AUTH_URL + "?nonce=kkk&state=aaa&redirect_uri=" + this.REDIRECT_URI + "&client_id=" + this.APP_ID + "&acr_values=2&scope=openid&response_type=code&login_hint=" + msisdn;
   }
}
