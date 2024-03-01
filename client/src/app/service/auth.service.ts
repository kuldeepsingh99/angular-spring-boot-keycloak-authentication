import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloak: KeycloakService) { }

  public getLoggedUser() {
    try {
      const userDetails = this.keycloak.getKeycloakInstance().idTokenParsed;

      return userDetails;
    } catch (e){
      console.error(e);
      return undefined;
    }
  }

  public isLoggedIn() : boolean {
    return this.keycloak.isLoggedIn();
  }

  public loadUserProfile() {
    return this.keycloak.loadUserProfile();
  }

  public login(){
    this.keycloak.login();
  }

  public logout(){
    this.keycloak.logout();
  }

  public getToken(){
    return this.keycloak.getToken();
  }

  public addTokenToHeader(){
    this.keycloak.addTokenToHeader();
  }


}
