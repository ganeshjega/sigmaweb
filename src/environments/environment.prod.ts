export const environment = {
  production: true,
  socket: "http://115.112.185.58:3101",
  baseUrl: "http://115.112.185.58:3100/api/",
  javaReportApiServiceUrl: "http://115.112.185.58:8160/OrionAPIServices/",
  javaApiServiceUrl: "http://115.112.185.58:8160/OrionAPIServices/WorkflowManagementService/",
  db: 'newRcmDB_v1',
  dmsBaseUrl: 'http://115.112.185.58:3201/DMSIASERVICE/docdownload.do',
  //temporary method will remove after get DMS 24hrs session period api

  activateDmsSessionAlternativeMethod:true,
  setDmsSessionTime:1500000 //in milisecond 25minute set
};
