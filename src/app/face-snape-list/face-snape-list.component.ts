import { FaceSnapeService } from './../service/face-snape.service';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snape-list',
  templateUrl: './face-snape-list.component.html',
  styleUrl: './face-snape-list.component.scss'
})
export class FaceSnapeListComponent implements OnInit {
  faceSnaps!:FaceSnap[]
  constructor(private faceSnapService:FaceSnapeService){}
ngOnInit(): void {
  this.faceSnaps=this.faceSnapService.faceSnaps
}
}
