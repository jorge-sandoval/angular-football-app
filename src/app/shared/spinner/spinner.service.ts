// Based on https://stackblitz.com/edit/mat-spinner-and-cdk-overlay

import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs'
import { scan, map } from 'rxjs/operators'
import { MatSpinner } from '@angular/material/progress-spinner';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private spinnerTopRef = this.cdkSpinnerCreate();

    spinner$ :Subject<boolean> = new Subject()

    constructor(
        private overlay: Overlay,
    ) {

      this.spinner$
        .asObservable()
        .pipe(
          map(val => val ? 1 : -1 ),
          scan((acc, one) => (acc + one) >= 0 ? acc + one : 0, 0)
        )
        .subscribe(
          (res) => {
            if(res === 1){ this.showSpinner() }
            else if( res == 0 ){ 
              this.spinnerTopRef.hasAttached() ? this.stopSpinner(): null;
            }
          }
        )
    }

    present(present: boolean) {
        this.spinner$.next(present);
    }

    private cdkSpinnerCreate() {
        return this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'dark-backdrop',
            positionStrategy: this.overlay.position()
                .global()
                .centerHorizontally()
                .centerVertically()
        })
    }

    private showSpinner(){
      this.spinnerTopRef.attach(new ComponentPortal(MatSpinner))
    }

    private stopSpinner(){
      this.spinnerTopRef.detach() ;
    }
}