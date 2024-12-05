import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
  <h1 mat-dialog-title>Deletar Produto</h1>
  <div mat-dialog-content>
    Tem certeza que deseja deletar o produto?
  </div>
  <div mat-dialog-actions align="end">
    <button mat-raised-button color="accent" (click)="onNo()">Não</button>
    <button mat-raised-button color="warn" (click)="onYes()" cdkFocusInitial>Sim</button>
  </div>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmationDialogComponent {

  matDialogRef = inject(MatDialogRef);

  onNo() {

    this.matDialogRef.close(false);

  }

  onYes() {

    this.matDialogRef.close(true);

  }

}


@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  matDialog = inject(MatDialog);

  constructor() { }

  openDialog(): Observable<boolean> {
    return this.matDialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
  }
}
