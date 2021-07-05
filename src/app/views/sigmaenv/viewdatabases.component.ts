import { Component } from '@angular/core';
import { HttpService } from "../../../app/core/http-services/http.service";
import { ConfigService } from "../../../config.service";
import { environment } from "../../../environments/environment";

@Component({
  templateUrl: 'viewdatabases.component.html'
})
export class ViewDatabasesComponent {

  public datasourceArray = [];

  constructor(private httpservice: HttpService) { }

  ngOnInit() {
    console.log("View databases");
    this.pullData();
  }

  async pullData() {
    await this.httpservice.securePost("DataExportConfigurationService/getRegisteredDataSources", {}).toPromise().then( result => {
      console.log("Datasources retrieved ", result);
      this.datasourceArray = result["datasources"];
    });
  }
}