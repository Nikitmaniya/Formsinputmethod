import { Component,  } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  nikit;
  constructor(private formBuild: FormBuilder)
  {
     this.nikit = this.formBuild.group({
       user:['',Validators.required],
       address:['',Validators.required, Validators.minLength(5)]
     }) 
  }
  onSubmit(values)
  {
    console.warn("forms submit",values)
    
  }
}

