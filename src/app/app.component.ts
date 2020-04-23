import { Component, ViewChild } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatTable) table: MatTable<any>;
  title = 'moonApi';
  myDataArray;
  columnsToDisplay;
  date = new Date();
  year = this.date.getFullYear();
  tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  lat = 21.42664; // default to Makkah
  lng = 39.82563; // default to Makkah
  method = "0";
  both = false;
  format = "0"
  constructor(
    private http:HttpClient
    ){}

  ngOnInit(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } 
    this.make(false);
  }

  make(rerender){
    let url_prefix = "https://www.five-tech.com/ambu50/moonsigting-adaptive/time_json.php?";
    let url_params = `year=${this.year}&tz=${this.tz}&lat=${this.lat}&lon=${this.lng}&method=${this.method}&both=${this.both}&time=${this.format}`;
    console.log(`URL: ${url_prefix + url_params}`);
    this.http.get(url_prefix + url_params).subscribe(data=> {
      console.log(data);
      this.myDataArray = (<any>data).times;
      let query = (<any>data).query;
      console.log(`both ${query.both}`);
      if(query.both == "true" && query.method < 3){
        this.columnsToDisplay = ['day','fajr','sunrise','dhuhr','asr_s','asr_h','maghrib','isha'];
      }else{
        this.columnsToDisplay = ['day','fajr','sunrise','dhuhr','asr','maghrib','isha'];
      }
      if(rerender)
        this.table.renderRows();
   });
  }

  onToggle(){
    this.both =!this.both;
  }

  onChange(){
    this.make(true);
  }


}
