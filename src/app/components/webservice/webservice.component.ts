import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.component.html',
  styleUrls: ['./webservice.component.css']
})
export class WebserviceComponent implements OnInit {
  dia!:string;
  signo!:string;
  horoscopo:Horoscopo=new Horoscopo();
  constructor(private webservice:WebserviceService) { }

  ngOnInit(): void {
  }

  mandarSigno(){
    console.log("aaa");
    console.log(this.dia);
    console.log(this.signo);

    if(this.dia!=undefined && this.signo!=undefined)
    this.webservice.hacerAlgo(this.signo,this.dia).subscribe(res=>{
      this.horoscopo = new Horoscopo();
      console.log(res);
      console.log(res);
      this.horoscopo.color = res.color;
      this.horoscopo.current_date = res.current_date;
      this.horoscopo.date_range = res.date_range;
      this.horoscopo.descripcion = res.description;      
    })
  }
}
