import { Component } from '@angular/core';
import { HttpService } from "../../../app/core/http-services/http.service";
import { ConfigService } from "../../../config.service";
import { environment } from "../../../environments/environment";

@Component({
  templateUrl: 'addAppServer.component.html'
})
export class AddAppServerComponent {

  constructor(private httpservice: HttpService) {}

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  public dataSourceName:string;
  public driverClassName:string;
  public databaseUrl:string;
  public userName:string;
  public password:string;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  testAppServerDefinition() {
    console.log("test success");
  }

  async saveAppServerDefinition() {
    let x:any = {};
    x["datasource-name"] = this.dataSourceName;
    x["database.driverName"] = this.driverClassName;
    x["database.url"] = this.databaseUrl;
    x["database.username"] = this.userName;
    x["database.password"] = this.password;
    // alert(JSON.stringify(x));
    await this.httpservice.securePost("DataExportConfigurationService/registerAppServer", x).toPromise().then( result => {
      console.log("AppServer saved ", result);
      alert("AppServer " + this.dataSourceName + " saved successfully");
    });

    return true;
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
