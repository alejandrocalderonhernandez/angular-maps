import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';


@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor( public snackBar: MatSnackBar, public dialog: MatDialog ) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
   }

  ngOnInit() {
  }

  addMarcador(event) {
    const newMacrador = new Marcador(event.coords.lat, event.lng.this.lng);
    this.marcadores.push(newMacrador);
    this.saveStorage();
    this.snackBar.open('marcador agregado', 'cerrar', {duration: 3000});
  }

  saveStorage() {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores));
  }

  deleteItem( index: number) {
    this.marcadores.splice(index, 1);
    this.saveStorage();
    this.snackBar.open('marcador borrado', 'cerrar', {duration: 3000});
  }

  openDialog(marcador: Marcador ): void {
    const dialogRef = this.dialog.open( EditComponent, {
      width: '250px',
      data: { title: marcador.title, desc: marcador.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (!result) {
        return;
      }
      marcador.title = result.title;
      marcador.descrption = result.descrption;
    });
  }
}
