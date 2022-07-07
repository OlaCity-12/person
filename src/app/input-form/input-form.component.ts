import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  addPerson;

  list: any[] = []
 

  constructor(private formbuilder: FormBuilder) {
    this.addPerson = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit(): void {}

 

  addName(data: any){
  
    this.list.push({id: this.list.length, name:data})
    this.addPerson.reset();
  }

  removeName(id: number){
    this.list = this.list.filter(item => item.id !== id)
  }
}
