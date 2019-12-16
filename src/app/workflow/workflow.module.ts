import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {ItemPanelComponent} from './item-panel/item-panel.component';
import {ToolbarPanelComponent} from './toolbar-panel/toolbar-panel.component';
import {ApprovalPanelComponent} from './right-panel/approval-panel/approval-panel.component';
import {BranchPanelComponent} from './right-panel/branch-panel/branch-panel.component';
import {StartPanelComponent} from './right-panel/start-panel/start-panel.component';
import {EndPanelComponent} from './right-panel/end-panel/end-panel.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [MainComponent, ItemPanelComponent, ToolbarPanelComponent, ApprovalPanelComponent, BranchPanelComponent, StartPanelComponent, EndPanelComponent],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule
    ]
})
export class WorkflowModule {
}
