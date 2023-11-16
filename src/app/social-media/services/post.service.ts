import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post.model";
import {environnement} from "../../../environnements/environnement";

@Injectable()
export class PostService{
  constructor(private http:HttpClient) {
  }

  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(`${environnement.apiUrl}/posts`)
  }
}
