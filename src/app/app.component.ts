import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    @ViewChild('workFlow', {static: true}) workFlow: any;
    modalVisible = false;
    demoData = {};

    lang = 'zh';
    candidateUsers = [{id: '1', name: 'Tom'}, {id: '2', name: 'Steven'}, {id: '3', name: 'Andy'}];
    candidateGroups = [{id: '1', name: 'Manager'}, {id: '2', name: 'Security'}, {id: '3', name: 'OA'}];

    title = 'ng-g6-editor';

    exportJson() {
        console.log(this.workFlow.graph.save());
    }

    exportXML() {
        this.workFlow.graph.saveXML();
    }
}
