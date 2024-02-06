import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IProducts } from '../../models/product';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class DialogBoxComponent {
  myForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    cpu: new FormControl('', [Validators.required]),
    operation_memory: new FormControl('', [Validators.required]),
    memomery: new FormControl('', [Validators.required]),
    display: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProducts,
    public dialog: MatDialog
  ) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {});
  }
  onNoClick(): void {
    this.myForm.reset();
    this.dialogRef.close();
  }
  onSubmit() {
    this.data = {
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      img: './assets/images/26509.500@2x.jpeg',
      configure: {
        CPU: this.myForm.value.cpu,
        operation_memory: this.myForm.value.operation_memory,
        memomery: this.myForm.value.memomery,
        display: this.myForm.value.display,
      },
    };
    console.log(this.data);
    this.dialogRef.close(this.data);
  }
}
