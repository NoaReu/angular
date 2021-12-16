import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Country } from '../../shared/country.model'; 

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {


  public searchText:string="";
  public filterArr:Country[]=[];
  
  constructor(private myCountyService:CountryService) {
    
   }
  
  public filter():void{
    this.filterArr=[];
    for(let c of this.myCountyService.countries ){
        if(c.name.includes(this.searchText)|| (c.capital.includes(this.searchText))){
          this.filterArr.push(c);
        }
    }
    
  }

  ngOnInit(): void {}

}
