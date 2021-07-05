import { Component } from '@angular/core';
import { HttpService } from "../../../app/core/http-services/http.service";

@Component({
  templateUrl: 'viewappservers.component.html'
})
export class ViewAppServersComponent {

  public datasourceArray = [];

  constructor(private httpservice: HttpService) { }

  ngOnInit() {
    console.log("View appservers");
    this.pullData();
  }

  async pullData() {
    await this.httpservice.securePost("DataExportConfigurationService/getRegisteredAppServers", {}).toPromise().then( result => {
      console.log("AppServers retrieved ", result);
      this.datasourceArray = result["appservers"];
    });
  }
}