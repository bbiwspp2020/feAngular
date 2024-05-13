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
  data :any
  flash = [
    {
      title: "HAVIT HV-G92 Gamepad",
      pricr: 210,
      discount: 10,
      oriPrice: 100,
      rate: 4.5,
      form: 200,
      image: "../../../assets/images/flash/1.png"
    },
    {
      title: "AK-900 Wired Keyboard",
      pricr: 102,
      discount: 10,
      oriPrice: 100,
      rate: 4.5,
      form: 200,
      image: "../../../assets/images/flash/2.png"
    },
    {
      title: "IPS LCD Gaming Monitor",
      pricr: 1110,
      discount: 10,
      oriPrice: 100,
      rate: 3.5,
      form: 200,
      image: "../../../assets/images/flash/3.png"
    },
    {
      title: "S-Series Comfort Chair ",
      pricr: 103,
      discount: 10,
      oriPrice: 100,
      rate: 1.5,
      form: 200,
      image: "../../../assets/images/flash/4.png"
    },
  ]

  shop: any = []
  constructor(
    private service: ServicesService
  ) {
    this.service.getCategory().subscribe((res) => {
      console.log('data :', res);
      this.data = res.responde
    })

  }

  change(value: any): void {
    console.log(value);
  }

  handleOkMiddle(): void {
    this.isVisibleMiddle = false;
  }
  isLoadingOne = false;
  loadOne(data: any): void {
    setTimeout(() => {
      this.shop.push(data)
    }, 5000);
  }


}
