export function saveStorageJWTToken(jwt_token) {
  localStorage.setItem('token',jwt_token);
}

export function saveStorageAuth(auth) {
  localStorage.setItem('auth', auth);
}

export function getStorageAuth() {
  return localStorage.getItem('auth');
}

export function getStorageJWTToken() {
  return localStorage.getItem('token');
}