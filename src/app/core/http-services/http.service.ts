import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { LocalStorageService } from "../data-services/local-storage.service";
import { ConfigService } from '../../../config.service';


@Injectable({
  providedIn: "root",
})
export class HttpService {
  baseUrl: string = environment.baseUrl;
  // javaBaseAttachmentUrl: string = environment.javaAttchmentApiServiceUrl;
  javaBaseReportUrl: string = environment.javaReportApiServiceUrl;
  javaBaseUrl: string = environment.javaApiServiceUrl;

  private headerOptions: any = {
    "Content-type": "application/json",
    // 'x-access-token': null
  };
  token: string;
  public headers;
  public options: HttpHeaders;
  public optionsRcmia: HttpHeaders;
  public headersRcmia;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router,
    private configService:ConfigService
  ) {
    this.headers = new HttpHeaders(this.headerOptions);

    if (!configService.config) {
      configService.loadConfig().then(config => {
        this.baseUrl = configService.config.baseUrl;
        // javaBaseAttachmentUrl: string = environment.javaAttchmentApiServiceUrl;
        this.javaBaseReportUrl = configService.config.javaReportApiServiceUrl;
        this.javaBaseUrl = configService.config.javaApiServiceUrl;
        // this.generateHeaders();
      } );
    }
  }

  generateHeaders(callback: Function = undefined) {
    this.options = new HttpHeaders(this.headers);
    this.optionsRcmia = new HttpHeaders(this.headersRcmia);
    //console.log("===============111=====");
    const token = this.localStorage.getLocalStorage("token");

    if (!!token) {
      this.headers = new HttpHeaders().set("authorization", token);
    }
    else {
      this.manageJwtExpired();
    }
  }
  /**
   * for using get method.
   * @param url : url where request
   * @param params
   */
  secureGet(url: string, params?: object) {
    this.generateHeaders();
    const apiUrl = `${this.baseUrl}${url}${this.generateQueryString(params)}`;
    return this.http.get(apiUrl, {
      headers: this.headers,
    });
  }

  /**
   * for using put method
   * @param url : url where request will be send
   * @param data : body part of post data
   * @param params : Query params
   */
  securePut(url: string, data?: any, params?: object) {
    this.generateHeaders();
    const apiUrl = `${this.baseUrl}${url}${this.generateQueryString(params)}`;
    return this.http.put(apiUrl, data, {
      headers: this.headers,
    });
  }

  /**
   * for using put method
   * @param url : url where request will be send
   * @param data : body part of post data
   * @param params : Query params
   */
  securePostObsolute(url: string, data?: any, params?: object) {
    const apiUrl = `${url}${this.generateQueryString(params)}`;
    return this.http.post(apiUrl, data, {
      headers: this.headers,
    });
  }

  /**
   * for using put method
   * @param url : url where request will be send
   * @param data : body part of post data
   * @param params : Query params
   */
  securePost(url: string, data?: any, params?: object) {
    // this.generateHeaders();
    const apiUrl = `${this.baseUrl}${url}${this.generateQueryString(params)}`;
    console.log("@@@@ apiUrl",apiUrl);
    return this.http.post(apiUrl, data, {
      headers: this.headers,
    });
  }

  secureJavaPostApi(url: string, data?: any, params?: object) {
    const apiUrl = `${this.javaBaseUrl}${url}${this.generateQueryString(
      params
    )}`;
    return this.http.post(apiUrl, data, {
      headers: this.headers,
    });
  }
  secureJavaPostReportApi(url: string, data?: any, params?: object) {
    const apiUrl = `${this.javaBaseReportUrl}${url}${this.generateQueryString(
      params
    )}`;
    return this.http.post(apiUrl, data, {
      headers: this.headers,
    });
  }
  // secureJavaAttchmentReportApi(url: string, data?: any, params?: object) {
  //   const apiUrl = `${this.javaBaseAttachmentUrl}${url}${this.generateQueryString(
  //     params
  //   )}`;
  //   return this.http.securePost(apiUrl, data, {
  //     headers: this.headers,
  //   });
  // }
  /**
   * delete method does not have any body part
   * passes object id as parameter
   * also passes token in header part
   * @param url : url where request will be send
   */
  secureDelete(url: string) {
    this.generateHeaders();
    const apiUrl = `${this.baseUrl}${url}`;
    return this.http.delete(apiUrl, {
      headers: this.headers,
    });
  }

  /**
   * for using put method
   * @param url : url where request will be send
   * @param data : body part of post data
   * @param params : Query params
   */
  post(url: string, data?: any, params?: object) {
    const apiUrl = `${this.baseUrl}${url}${this.generateQueryString(params)}`;
    return this.http.post(apiUrl, data);
  }

  /**
   * for using get method.
   * @param url : url where request
   * @param params
   */
  get(url: string, params?: object) {
    // this.generateHeaders();
    const apiUrl = `${this.baseUrl}${url}${this.generateQueryString(params)}`;
    return this.http.get(apiUrl, {
      headers: this.headers,
    });
  }

  /**
   * Helper Method that will generate the queryString.
   * @param params Object to be converted into URLSearchParam.
   */
  generateQueryString(params?: object): string {
    let queryString = "",
      httpParam = new URLSearchParams();
    Object.keys(params || {}).forEach((key) => httpParam.set(key, params[key]));
    queryString = httpParam.toString() ? `?${httpParam.toString()}` : "";
    return queryString;
  }

  manageJwtExpired() {
    console.log("token expired");
    this.localStorage.removeLocalStorageItem('token');
    if (!location.pathname.includes('login')) {
      this.router.navigate(['login'], { queryParams: { redirectUrl: location.pathname } })
    }
    else {
      this.router.navigate(['login']);
    }
  }
}
