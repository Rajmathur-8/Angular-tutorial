import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/directives/attribute-directives/attribute-directives.component';
import { IfelseComponent } from './components/control-flow/ifelse/ifelse.component';
import { ForComponent } from './components/control-flow/for/for.component';
import { SwitchComponent } from './components/control-flow/switch/switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'structural-directive',
        component:StructuralDirectivesComponent
    },
    {
        path:'attribute-directive',
        component:AttributeDirectivesComponent
    },
    {
        path:'ifelse',
        component:IfelseComponent
    },
    {
        path:'for',
        component:ForComponent
    },
    {
        path:'switch',
        component:SwitchComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    },
    {
        path:'form',
        component:TemplateComponent
    },
];
