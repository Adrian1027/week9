// import { Component, OnInit } from '@angular/core';
// import { DatabaseService } from '../database.service';

// @Component({
//   selector: 'app-actor',
//   templateUrl: './actor.component.html',
//   styleUrls: ['./actor.component.css']
// })
// export class ActorComponent implements OnInit {

//   constructor(private db:DatabaseService) { }

// fullName="";
// bYear=0;
// section=1;
// actorsDB:any[]=[];
//   ngOnInit(): void {
//     this.onGetActors();
//   }


//   onGetActors(){
//     this.db.getActors().subscribe((data: any[])=>{
//       this.actorsDB=data;
//     })

//   }

//   // getAllQuestions(){
//   //   this.Student.getWorkshopQ().subscribe((data: any[])=>{
//   //     this.questionsDB=data;
//   //   })

  
//   onSaveActor(){
//     let obj={name:this.fullName,bYear:this.bYear};
//     this.db.addActor(obj).subscribe( data=>{
//       this.onGetActors();
      
//       });
//     }
//     changeSection(id){
//       this.section=id;
//     };
//     color=1;
//     changecolor(){
//       if(this.color==1) {
//         this.color=this.color+1;
//       }else if(this.color==2){ this.color=this.color-1}
//     }

// }
import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";



@Component({
  selector: "app-actor",
  templateUrl: "./actor.component.html",
  styleUrls: ["./actor.component.css"],
})
export class ActorComponent implements OnInit {
  actorsDB: any[] = [];

  section = 1;

  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  actorselected:string="";
  moviesDB: any[] = [];
  

  
  movieId: string = "";
  movieTitle:string="";
  movieYear:number=0;
  selectedYear:number=0;
  movieselected:string="";

  constructor(private dbService: DatabaseService) {}

  //Get all Actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }
  //Create a new Actor, POST request
  onSaveActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.createActor(obj).subscribe(result => {
      this.onGetActors();
    });
  }
  // Update an Actor
  onSelectUpdate(item) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }
  onUpdateActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.updateActor(this.actorId, obj).subscribe(result => {
      this.onGetActors();
    });
  }

  //Delete Actor
  onDeleteActor(item) {
    this.dbService.deleteActor(item._id).subscribe(result => {
      this.onGetActors();
    });
  }
  onSelectActor(item){
    this.actorselected=item._id;

  }
  


  //Get all movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }
  //Create a new movie, POST request
  onSaveMovie() {
    let obj = { title: this.movieTitle, year: this.movieYear };
    this.dbService.createMovie(obj).subscribe(result => {
      this.onGetMovies();
    });
  }

  deleteYearMovie() {
  
    this.dbService.deleteYearMovie(this.selectedYear).subscribe(result => {
      this.onGetMovies();
    });
  }

  //Delete movie
  onDeleteMovie(item) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      this.onGetMovies();
    });
  }
  onSelectMovie(item){
    this.movieselected=item._id;

  }
  onAddActor(movieID,actorID){
    this.dbService.AddActorMovie(movieID,actorID).subscribe(result =>{
      this.onGetMovies;
    });
    this.dbService.AddMovieActor(actorID,movieID).subscribe(result =>{
      this.onGetActors;
    });

  }
  // This lifecycle callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetActors();
  }

  changeSection(sectionId) {
    this.section = sectionId;
    this.resetValues();
  }

  resetValues() {
    this.fullName = "";
    this.bYear = 0;
    this.actorId = "";
  }
}