import { HttpHeaders } from "@angular/common/http";

export class MyConfig{
  static addressServer: string ='https://api.gameofthronesquotes.xyz/v1/';
  static httpOption={
    headers:new HttpHeaders({
      "Content-Type":"application/json"
    })
  };
}