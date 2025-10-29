class TokenStore {
  setToken(token: string) {
    localStorage.setItem('@ngagio/token', token);
  }

  getToken() {
    return localStorage.getItem('@ngagio/token');
  }

  removeToken() {
    localStorage.removeItem('@ngagio/token');
  }
}

export const tokenStore = new TokenStore();