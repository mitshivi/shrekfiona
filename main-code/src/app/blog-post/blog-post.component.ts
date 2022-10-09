import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  
  @Input() blogData!: {
    title: string,
    description: string,
    image: string,
    mainText: string,
    secondaryText: string,
    tags: Array<string>
  }

  constructor() { }

  ngOnInit(): void {

  }

}
