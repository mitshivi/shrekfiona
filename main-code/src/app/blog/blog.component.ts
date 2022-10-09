import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogData = [{
    "title": "sample title",
    "description": "sample description",
    "image": "",
    "mainText": "sample main text",
    "secondaryText": "sample secondary texxt",
    "tags": ["happy", "life", "sample"]
    
},
{
    "title": "sample title",
    "description": "sample description",
    "image": "",
    "mainText": "sample main text",
    "secondaryText": "sample secondary texxt",
    "tags": ["happy", "life", "sample"]
    
},
{
    "title": "sample title",
    "description": "sample description",
    "image": "",
    "mainText": "sample main text",
    "secondaryText": "sample secondary texxt",
    "tags": ["happy", "life", "sample"]
    
},
{
    "title": "sample title",
    "description": "sample description",
    "image": "",
    "mainText": "sample main text",
    "secondaryText": "sample secondary texxt",
    "tags": ["happy", "life", "sample"]
    
}]



  constructor() { }

  ngOnInit(): void {
  }

}
