import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../Interfaces/Type';
import { EntryService } from '../entry.service'

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent  {

  constructor(private service:EntryService) { }

  types: Type[] = [
    {value:true, display:'Expense'},
    {value:false, display: 'Income'}
  ]

  entryForm = new FormGroup({
    description: new FormControl('', Validators.required),
    isExpense: new FormControl('', Validators.required),
    value: new FormControl('', [Validators.required,Validators.pattern('\\d+\\.?\\d*')])
  })

  onSubmit(){
    console.log(this.entryForm.value);
    this.service.createEntry(this.entryForm.value).subscribe((data) => {
      console.log("Data - ",data);
    })
  }
}