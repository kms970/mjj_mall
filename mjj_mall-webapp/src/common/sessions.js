export function saveStorageJWTToken(jwt_token) {
  localStorage.setItem('token',jwt_token);
}

export function saveStorageAuth(auth) {
  localStorage.setItem('auth', auth);
}
