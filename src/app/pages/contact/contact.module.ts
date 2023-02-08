import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from '../contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    ContactComponent,
    AddContactComponent,
    ContactDetailComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
