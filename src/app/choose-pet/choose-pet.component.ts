import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-choose-pet',
  templateUrl: './choose-pet.component.html',
  styleUrls: ['./choose-pet.component.css']
})
export class ChoosePetComponent implements OnInit {
  public petForm: FormGroup;
  public pets!: FormArray;

  constructor(private fb: FormBuilder) { 
    this.petForm = this.fb.group({
      pets: this.fb.array([this.createPet()])
    });
 }

  ngOnInit(): void {
  }

  createPet(): FormGroup {
    return this.fb.group({
      petName :'',
      petRace : '',
      petAge : '',
      petPoids:'',
    });
  }

  get petArray() {
    return this.petForm.controls['pets'] as FormArray;
  }

  addPet(){

    this.pets = this.petForm.get('pets') as FormArray;
    this.pets.push(this.createPet());
    
  }


}
