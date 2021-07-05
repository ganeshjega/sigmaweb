import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    config: Config;

    constructor(private http: HttpClient) { 
        console.log("in constructor of config service");
        // this.loadConfig();
    }

    loadConfig() {
        console.log("loading config in config service ");
        return this.http
            .get<Config>('assets/config.json')
            .toPromise()
            .then(config => {
                this.config = config;
                console.log("loadconfig-> ", this.config);
            });
    }
}


export class Config {
    socket:string;
    baseUrl:string;
    javaReportApiServiceUrl:string;
    javaApiServiceUrl:string;
    db:string;
    dmsBaseUrl:string;
    activateDmsSessionAlternativeMethod:boolean;
    setDmsSessionTime:number;
}