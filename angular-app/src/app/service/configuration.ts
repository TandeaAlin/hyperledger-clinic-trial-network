import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiIP: string = "http://localhost";
    public ApiPort: string = "3000";
    public AdminApiPort: string = "3001";
    public Server: string = this.ApiIP+":"+this.ApiPort;
    public AdminServer: string = this.ApiIP+":"+this.AdminApiPort;
    public ApiUrl: string = "/api/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public AdminServerWithApiUrl = this.AdminServer + this.ApiUrl; 
}
