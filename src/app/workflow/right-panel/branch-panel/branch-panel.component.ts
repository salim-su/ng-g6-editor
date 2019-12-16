import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-branch-panel',
    templateUrl: './branch-panel.component.html',
    styleUrls: ['./branch-panel.component.less']
})
export class BranchPanelComponent implements OnInit, OnChanges {
    @Input() selData;
    @Output() customClick = new EventEmitter<any>();
    labelValue: string;
    emitData: any;

    constructor() {
    }

    ngOnInit() {
    }

    onChange(type: string, value: string): void {

        if (type === 'label') {
            console.log('label');
            this.emitData = {
                type, value,
            };
        }
        this.customClick.emit(this.emitData);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);

        /*数据进来  表单接收数据 */
        for (const selDataKey in this.selData) {
            if (selDataKey === 'label') {
                this.labelValue = this.selData[selDataKey];
            }

        }

    }
}
