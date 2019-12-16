import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-approval-panel',
    templateUrl: './approval-panel.component.html',
    styleUrls: ['./approval-panel.component.less']
})
export class ApprovalPanelComponent implements OnInit, OnChanges {
    @Input() selData;
    @Output() customClick = new EventEmitter<any>();
    labelValue: string;
    dueDateValue: Date;
    assignType: any;
    emitData: any;
    assignValue: any;

    flag;

    constructor() {
    }

    ngOnInit() {
    }

    onChange(type: string, value: string): void {

        if (type === 'dueDate') {
            console.log('dueDate');
            this.emitData = {
                type, value: moment(value).format('YYYY-MM-DD hh:mm:ss'),
            };
        }
        if (type === 'label') {
            console.log('label');
            this.emitData = {
                type, value,
            };
        }
        if (type === 'assignType') {
            console.log(value);
            console.log('assignType');
            this.emitData = {
                type, value,
            };
        }
        if (type === 'assignValue') {
            console.log(value);
            console.log('assignValue');
            this.emitData = {
                type, value,
            };
        }
        this.customClick.emit(this.emitData);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.labelValue = null;
        this.dueDateValue = null;
        this.assignType = null;
        this.assignValue = null;
        /*数据进来  表单接收数据 */

        for (const selDataKey in this.selData) {
            if (selDataKey === 'label') {
                this.labelValue = this.selData[selDataKey];
            } else if (selDataKey === 'dueDate') {
                this.dueDateValue = moment(this.selData[selDataKey]).toDate();
            } else if (selDataKey === 'assignType') {
                this.assignType = this.selData[selDataKey];
            } else if (selDataKey === 'assignValue') {
                this.assignValue = this.selData[selDataKey];
            }
        }

    }
}
