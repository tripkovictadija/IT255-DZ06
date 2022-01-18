import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/modules/Room';

@Component({
  selector: 'app-dodaj-sobu',
  templateUrl: './dodaj-sobu.component.html',
  styleUrls: ['./dodaj-sobu.component.css']
})
export class DodajSobuComponent implements OnInit {

  public roomForm!: FormGroup;
  @Output() dodatiSobu: EventEmitter<Room>;
  @Input() room!: Room;

  constructor() { 

    this.dodatiSobu = new EventEmitter();

  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.roomForm = new FormGroup({
      roomNumber: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      brOsoba: new FormControl('', [
        Validators.required
      ]),
      price: new FormControl('', [
        Validators.required
      ])
    });
  }

  public submitForm() {
    console.log("radi forma1");
    let roomNumber = this.roomForm.get('roomNumber')!.value;
    console.log(roomNumber); //radi??
    let name = this.roomForm.get('name')!.value;
    console.log(name); //radi???
    let brOsoba = this.roomForm.get('brOsoba')!.value;
    console.log(brOsoba); //radi
    let price = this.roomForm.get('price')!.value;
    console.log(price); //ne radi!!
    let room = new Room(roomNumber, name, brOsoba, price);
    console.log("radi forma6");
    this.dodatiSobu.emit(room);
  }


  

}
