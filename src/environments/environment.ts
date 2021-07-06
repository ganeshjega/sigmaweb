export const environment = {
  production: false,
  socket: "http://localhost:3001",
  baseUrl: "http://e940fed58383.ngrok.io/SigmaAPIServices/",
  javaReportApiServiceUrl: "http://115.112.185.58:8240/OrionAPIServices/",
  javaApiServiceUrl: "http://115.112.185.58:8240/OrionAPIServices/WorkflowManagementService/",
  db : 'newRcmDB_v1',
  dmsBaseUrl:"http://115.112.185.58:3201/DMSIASERVICE/docdownload.do",
  //temporary method will remove after get DMS 24hrs session period api

  activateDmsSessionAlternativeMethod:true,
  setDmsSessionTime:300000//in milisecond
};