import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent {

  constructor() { }

  registerUser(form: NgForm) {
    document.getElementById('pname').innerHTML = "Name : "+form.value.name
    document.getElementById('pspec').innerHTML = "Spécialité : "+form.value.specialite
    document.getElementById('pyear').innerHTML = "Année : "+form.value.year
    document.getElementById('pdesc').innerHTML = "Description : "+form.value.desc

    console.log(form.value.name);
    console.log(form.value.specialite);
    console.log(form.value.specialite);
    console.log(form.value.desc);
  }
  
}

