import { Component } from '@angular/core';
import { ServicesService } from 'src/services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  array = [1, 2, 3, 4];
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  isVisibleMiddle = false;
  data = [
    {
      name: "Phones",
      image: "../../../assets/Categorys/Category-Camera.png"
    },
    {
      name: "CellPhone",
      image: "../../../assets/Categorys/Category-CellPhone.png"
    },
    {
      name: "Computer",
      image: "../../../assets/Categorys/Category-Computer.png"
    },
    {
      name: "Gamepad",
      image: "../../../assets/Categorys/Category-Gamepad.png"
    },
    {
      name: "Headphone",
      image: "../../../assets/Categorys/Category-Headphone.png"
    },
    {
      name: "SmartWatch",
      image: "../../../assets/Categorys/Category-SmartWatch.png"
    },
  ]
  flash = [
    {
      title: "HAVIT HV-G92 Gamepad",
      pricr:210,
      discount:10,
      oriPrice:100,
      rate:4.5,
      form:200,
      image: "../../../assets/images/flash/1.png"
    },
    {
      title: "AK-900 Wired Keyboard",
      pricr:102,
      discount:10,
      oriPrice:100,
      rate:4.5,
      form:200,
      image: "../../../assets/images/flash/2.png"
    },
    {
      title: "IPS LCD Gaming Monitor",
      pricr:1110,
      discount:10,
      oriPrice:100,
      rate:3.5,
      form:200,
      image: "../../../assets/images/flash/3.png"
    },
    {
      title: "S-Series Comfort Chair ",
      pricr:103,
      discount:10,
      oriPrice:100,
      rate:1.5,
      form:200,
      image: "../../../assets/images/flash/4.png"
    },
  ]

  shop:any = []
  constructor(
    private service: ServicesService
  ) {


  }

  change(value: any): void {
    console.log(value);
  }

  handleOkMiddle(): void {
    this.isVisibleMiddle = false;
  }

  showModalMiddle(data:any): void {
    this.shop.push(data)
  }

  
}
