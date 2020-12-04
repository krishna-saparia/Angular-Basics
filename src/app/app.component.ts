import { Component , OnInit } from '@angular/core';
import * as $ from "jquery";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent implements OnInit {
  name = 'krish';

  ngOnInit(): void {
  }

  // async Testing(){
  //   //var getSearchInput = document.getElementById("txtName").nodeValue;
  //   var show = await $.ajax('http://api.tvmaze.com/lookup/shows?tvrage=24493')
  //   var search = $("#txtName").val();
  //   console.log(show)
  //   //alert(search);
  //
  //   if (search == show.name.toLowerCase() || search == show.name.toUpperCase() ){
  //     this.showData(show.name , show.summary, show.image.original)
  //   }
  //   else{
  //     alert("The show which are you looking for either not available or check your spelling ");
  //   }
  // }
  //
  // showData(name,summary,imgUrl){
  //   // get main
  //   var main = document.getElementById('main')
  //
  //   //create tags
  //   var header = document.createElement('h1')
  //   var img = document.createElement('img')
  //   var summaryTag = document.createElement('div')
  //
  //   // add data
  //   header.appendChild(document.createTextNode(name))
  //   //header.appendChild(headText)
  //   img.setAttribute('src',imgUrl)
  //   img.setAttribute('width', "258")
  //   summaryTag.innerHTML = summary
  //
  //   // add to page
  //   main.appendChild(header)
  //   main.appendChild(img)
  //   //main.appendChild(summaryTag)
  //   main.innerHTML += summary
  // }
}


