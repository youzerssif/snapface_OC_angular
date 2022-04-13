import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!:string;
  createdDate!:Date;
  snaps!:number;
  imageUrl!:string;
  buttonText!:string;

  ngOnInit() {
      this.title = "Mytitle";
      this.description = "MyDescription";
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = "https://cdn.pixabay.com/photo/2019/03/18/04/53/bird-4062359__340.jpg";

      this.buttonText = "Oh Snap !";
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !'){
      this.snaps++;
      this.buttonText = 'Oop Unsnap !';
    }else{
      this.snaps--;
      this.buttonText = 'Oh Snap !';
    }
  }
}
