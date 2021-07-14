import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {

  formulario: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) {
    this.formulario= this.formBuilder.group([{
      nombre:['',[Validators.required, Validators.maxLength(30),Validators.minLength(5)]],
      pais:['',[Validators.required]],
      observacion:['',Validators.required]
    }])
  }


  ngOnInit(): void {    
  }

  get f() {return this.formulario.controls}

  onSubmit() {
    this.submitted=true;
    if(this.formulario.invalid){
      return;
    }

  }

}
