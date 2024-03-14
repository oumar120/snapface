import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapeService {

  constructor() {
   }
   faceSnaps:FaceSnap[] =[
    {id:1,titre:"rambo",description:"c'est un film sorti en 2000",date:new Date,snap:0,url:"../assets/image/netflix.jpg",location:"Paris"},
    {id:2,titre:"apprendre la programation",description:"un livre qui aborde de la programmation",date:new Date,snap:3,url:"../assets/image/programmation.jpg"},
    {id:3,titre:"la cuisine, un art", description:"un livre qui aborde de la programmation",date:new Date,snap:10,url:"../assets/image/cuisine.jpg",location:"canada"},
    {id:4,titre:"la cuisine, un art", description:"un livre qui aborde de la programmation",date:new Date,snap:10,url:"../assets/image/cuisine.jpg",location:"canada"}
]
getSnapById(id:number){
  const faceSnap=this.faceSnaps.find(faceSnap=>faceSnap.id===id);
  if(faceSnap){
    return faceSnap
  }else{
    throw new Error("aucun faceSnap trouvé!");
  }
}
onSnapUnsnap(id:number,type:'snap'|'unsnap'){
  const faceSnap=this.getSnapById(id)
  if(type==="snap"){
    faceSnap.snap++
  }else{
    faceSnap.snap--
  }
}
}
