export default class User {
  private email: string;
  private password: string;
  private accessToken: string;

  constructor() {
    this.accessToken = "DzJ7vLHAEVg7soB3V4iAYuawxir2kHNLWAjeUaej";
    this.email = "yehia@seoudi.com";
    this.password = "Yehia@123";
  }
  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }
  getAccessToken() {
    return this.accessToken;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
}
