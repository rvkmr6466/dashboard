import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
//import { userInfo } from 'os';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	authUrl:"http://localhost:5000/api/auth"

	constructor(private http: HttpClient) {  }
	
	/* login(model : any){
	 	this.http.post(this.authurl + login, model).pipe(
			Map((response : any) => (
				const user = response;
				if (user.result.succeed){
					localStorage.setItem('token', user.token);
				}
				));
		)
	} */
}
