import { Injectable } from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import { Server } from "./server.model";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
@Injectable()
export class ServerService {
    constructor(private http: Http){}

    storeServers(servers: Server[]) {
        const headers = new Headers({'Test-Header': 'Testing'});
        return this.http.put('https://dummy-backend-for-angular-http.firebaseio.com/data.json',
                        servers, {headers:headers});
    }

    getServers() {
        return this.http.get('https://dummy-backend-for-angular-http.firebaseio.com/data.json')
                    .pipe(
                        map((response: Response) => response.json()),
                        catchError((error: Response) => {
                            return throwError(error);
                        })
                    );
    }

    getAppHeader() {
        return this.http.get('https://dummy-backend-for-angular-http.firebaseio.com/appHeader.json')
                        .pipe(
                            map((response: Response) => response.json())
                        );
    }
}