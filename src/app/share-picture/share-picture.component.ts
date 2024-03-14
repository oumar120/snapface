import { FaceSnapeService } from './../service/face-snape.service';
import { Component,OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import * as bootstrap from 'bootstrap'
import { Router } from '@angular/router';
@Component({
  selector: 'app-share-picture',
  templateUrl: './share-picture.component.html',
  styleUrl: './share-picture.component.scss',
})
export class SharePictureComponent implements OnInit {
@Input() faceSnap!:FaceSnap 
textButton!:string
constructor(private faceSnapeService:FaceSnapeService,private route:Router){}
ngOnInit(): void {
  this.textButton="oh snap";
}
onViewSnap(id:number){
this.route.navigate(['/facesnaps/'+id])
}
}
