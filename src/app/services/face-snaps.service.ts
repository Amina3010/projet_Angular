import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";


@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    faceSnaps: FaceSnap[]  = [
        {
          id: 1,
          title:'ONOMO HOTEL',
          description: 'Un endroit magnifique pour les randonnées!',
          imageUrl:'https://media.istockphoto.com/photos/3d-render-of-luxury-restaurant-interior-picture-id1079901206?k=20&m=1079901206&s=612x612&w=0&h=hbMrgWZzoO9zncJ_ZU2xUqVt0oGfPyAbv9FxhCm04EI=',
          createDate: new Date(),
          snaps: 20,
         location : 'Dakar',
        },
  
        {
          id: 2,
          title: 'RADISHON',
          description: 'Un endroit magnifique pour les randonnées!',
          imageUrl: 'https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=',
          createDate: new Date(),
          snaps: 20,
          location : 'Saint-Louis',
         
        },
  
        {
          id: 3,
          title:  'PULLMAN',
          description: 'Un endroit magnifique pour les randonnées!',
          imageUrl:'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM='      ,
          createDate: new Date(),
          snaps: 20,
    },

    {
      id: 4,
      title:  'MARINA BAY',
      description: 'Un endroit magnifique pour les randonnées!',
      imageUrl:'https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=20&m=843610508&s=612x612&w=0&h=zDihg07dmPyyYPYtLUK-YGrZ2O-tPIMroNvN4DJfuc8='      ,
      createDate: new Date(),
      snaps: 20,
},

{
  id: 5,
  title:  'VOGUE',
  description: 'Un endroit magnifique pour les randonnées!',
  imageUrl:'https://static3.depositphotos.com/1009905/269/i/600/depositphotos_2690303-stock-photo-interior-of-the-restaurant.jpg'      ,
  createDate: new Date(),
  snaps: 20,
},

      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
        }

      getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

        snapFaceSnapById(faceSnapId: number , snapType: 'snap' | 'unsnap'): void {
          const faceSnap = this.getFaceSnapById(faceSnapId)
          snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
    }

      