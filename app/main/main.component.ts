import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public cRoutFlag:string=this.myCountryService.gRoutFlag;
  
  constructor(private myCountryService:CountryService) { }

  ngOnInit(): void {
   
  }

}
