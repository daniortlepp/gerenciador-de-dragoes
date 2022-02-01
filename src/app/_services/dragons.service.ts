import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UtilService } from './util.service';

@Injectable({ providedIn: 'root' })
export class DragonsService {
    public endpoint;

    constructor(private http: HttpClient, private util: UtilService) {
        this.endpoint = this.util.getEndPoint();
    }

    listAll() {
        var url:string = this.endpoint + "/api/v1/dragon";
        return this.http.get(url);
    }

    getDragon(id) {
        var url:string = this.endpoint + "/api/v1/dragon/" + id;
        return this.http.get(url);
    }

    add(data) {
        var url:string = this.endpoint + "/api/v1/dragon";
        return this.http.post(url, data);
    }

    edit(data, id) {
        var url:string = this.endpoint + "/api/v1/dragon/" + id;
        return this.http.put(url, data);
    }

    delete(id) {
        var url:string = this.endpoint + "/api/v1/dragon/" + id;
        return this.http.delete(url);
    }
}