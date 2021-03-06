import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IgxToastPosition } from 'igniteui-js-blocks/main';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnInit {

    @Input()
    public toastPosition: IgxToastPosition = IgxToastPosition.Bottom;

    constructor() { }

    ngOnInit() {
    }

    public showToast(toast, position) {
        switch (position) {
            case 'middle' :
                this.toastPosition = IgxToastPosition.Middle;
                break;
            case 'top':
                this.toastPosition = IgxToastPosition.Top;
                break;
            default:
                this.toastPosition = IgxToastPosition.Bottom;
        }

        toast.show();
    }

}
