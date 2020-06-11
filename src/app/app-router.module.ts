import { RouterModule, Routes } from '@angular/router';

import { EntriesComponent } from './entries/entries.component';
import { NgModule } from '@angular/core';
import { NewEntryComponent } from './new-entry/new-entry.component'
import { DeleteEntryComponent } from './delete-entry/delete-entry.component'

const routes:Routes =[
    {path:'', component:EntriesComponent},
    {path:'entries', component:EntriesComponent},
    {path:'newentry', component:NewEntryComponent},
    {path:'deleteentry/:id', component:DeleteEntryComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}