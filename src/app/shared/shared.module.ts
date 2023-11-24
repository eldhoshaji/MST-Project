import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { LineClampDirective } from './directives/line-clamp.directive';
import { ToastModule } from 'primeng/toast';
import { CountryPipe } from './pipes/country.pipe';

const PRIMR_NG = [
  ButtonModule,
  CardModule,
  InputTextModule,
  TableModule,
  TagModule,
  DialogModule,
  InputTextareaModule,
  InputNumberModule,
  DropdownModule,
  ChipsModule,
  ToastModule
]

const PIPES = [
  CountryPipe
]

const DIRECTIVES = [
  LineClampDirective
]

// const SERVICES = [
// ]

@NgModule({
  declarations: [
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ...PRIMR_NG
  ],
  exports: [
    FontAwesomeModule,
    FormsModule,
    ...PRIMR_NG,
    ...PIPES,
    ...DIRECTIVES
  ],
  // providers: [...SERVICES],
})
export class SharedModule { }
