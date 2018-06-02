import { Injectable } from '@angular/core';

@Injectable()
export class IdProviderService{
    //generate a random id for new patients
    generateID() {
        var id = "";
        for(var i = 0; i < 4; i++){
            id += Math.random().toString(36).slice(-4);
        }
        return id;
    }
}