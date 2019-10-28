import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;

  constructor(  public formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<EditComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

      this.form = formBuilder.group({
        title: data.title,
        decription: data.description
      });
  }

  ngOnInit() {
  }

  save() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
