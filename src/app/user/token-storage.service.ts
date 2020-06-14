import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const All_USER_KEY = 'all-auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  static isLogInSuccess = false;
  static completeName : string = " ";
  static isAdmin: boolean = false;
  constructor() { }
  signOut() {
    window.sessionStorage.clear();
  }

  public static saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public static removeToken()
  {
    window.sessionStorage.removeItem(TOKEN_KEY);
  }

  public static getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public static saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public static moveUser()
  {
    window.sessionStorage.removeItem(USER_KEY)
  }

  public static saveCompleteUser(completeUser) {
    window.sessionStorage.removeItem(All_USER_KEY);
    window.sessionStorage.setItem(All_USER_KEY, JSON.stringify(completeUser));
  }
  public static removeCompleteUser()
  {
    window.sessionStorage.removeItem(All_USER_KEY);
  }
  public static getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}

