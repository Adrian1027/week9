// import { Injectable } from '@angular/core';
// import{HttpHeaders,HttpClient} from '@angular/common/http';
// const httpOptions = {
//   headers: new HttpHeaders({ "Content-Type": "application/json" }),
// };
// @Injectable({
//   providedIn: 'root'
// })
// export class DatabaseService {

//   constructor(private http:HttpClient) { }

// getActors(){

//   return this.http.get('/actors');

// }
// addActor(actor){
//   return this.http.post('/actors',actor,httpOptions);
// }
// }
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  result: any;

  getActors() {
    return this.http.get("/actors");
  }
  getActor(id: string) {
    let url = "/actors/" + id;
    return this.http.get(url);
  }
  createActor(data) {
    return this.http.post("/actors", data, httpOptions);
  }
  updateActor(id, data) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteActor(id) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }
  getMovies() {
    return this.http.get("/movies");
  }
  getMovie(id: string) {
    let url = "/movies/" + id;
    return this.http.get(url);
  }
  createMovie(data) {
    return this.http.post("/movies", data, httpOptions);
  }
  updateMovie(id, data) {
    let url = "/movies/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteMovie(id) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }
  deleteYearMovie(id){
    let url = "/deletemovies/" + id;
    return this.http.delete(url, httpOptions);
  }
  AddActorMovie(MID,AID){
    let url="/movies/"+MID+"/actors/"+AID;
    return this.http.post(url,httpOptions);
  }
  AddMovieActor(AID,MID){
    let url="/actors/"+AID+"/movies/"+MID;
    return this.http.post(url,httpOptions);
  }
}