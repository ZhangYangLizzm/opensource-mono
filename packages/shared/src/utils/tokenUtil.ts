export const tokenKey = "Token";

export class TokenUtil {
  static getToken() {
    return localStorage.getItem(tokenKey);
  }
  static setToken(token: string) {
    localStorage.setItem(tokenKey, token);
  }
  static removeToken() {
    localStorage.removeItem(tokenKey);
  }
}
