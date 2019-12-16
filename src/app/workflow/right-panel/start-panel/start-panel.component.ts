import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-start-panel',
    templateUrl: './start-panel.component.html',
    styleUrls: ['./start-panel.component.less']
})
export class StartPanelComponent implements OnInit, OnChanges {
    @Input() selData;
    @Output() customClick = new EventEmitter<any>();
    labelValue: string;
    beginDateValue: Date;
    emitData: any;

    constructor() {
    }

    ngOnInit() {
    }

    onChange(type: string, value: string): void {

        if (type === 'beginDate') {
            console.log('beginDate');
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
        this.customClick.emit(this.emitData);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);

        /*数据进来  表单接收数据 */
        for (const selDataKey in this.selData) {
            if (selDataKey === 'label') {
                this.labelValue = this.selData[selDataKey];
            } else if (selDataKey === 'beginDate') {
                this.beginDateValue = moment(this.selData[selDataKey]).toDate();
            }
        }

    }
}
