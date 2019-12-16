import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import i18n from '../locales';

@Component({
    selector: 'app-item-panel',
    templateUrl: './item-panel.component.html',
    styleUrls: ['./item-panel.component.less']
})
export class ItemPanelComponent implements OnInit {

    @ViewChild('itemPanel_dom', {static: true}) private itemPanelDom: ElementRef;

    i18n = i18n.zh;

    constructor() {
    }

    ngOnInit() {
    }

    getDom() {
        return this.itemPanelDom.nativeElement;
    }

}
