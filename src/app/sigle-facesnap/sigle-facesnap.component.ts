import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapeService } from '../service/face-snape.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sigle-facesnap',
  templateUrl: './sigle-facesnap.component.html',
  styleUrl: './sigle-facesnap.component.scss'
})
export class SigleFacesnapComponent {
  faceSnap!:FaceSnap
  textButton!:string
  constructor(private faceSnapeService:FaceSnapeService,private route:ActivatedRoute,private rout:Router){}
  ngOnInit(): void {
    const id= +this.route.snapshot.params['id']
    console.log(id)
    this.faceSnap=this.faceSnapeService.faceSnaps[id-1]
    console.log(this.faceSnap)
    this.textButton="oh snap";
  }
  onAddSnap(){
  if (this.textButton==="oh snap"){
   this.faceSnapeService.onSnapUnsnap(this.faceSnap.id,"snap")
   this.textButton="oups un snap";
  }
   else{
    this.faceSnapeService.onSnapUnsnap(this.faceSnap.id,"unsnap")
    this.textButton="oh snap"
   }
  
  }
  onBack(){
    this.rout.navigate(['/facesnaps'])
  }
}
