import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hack-news',
  templateUrl: './hack-news.component.html',
  styleUrls: ['./hack-news.component.css']
})
export class HackNewsComponent implements OnInit {

  likes = 5;
  article = {
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  };
  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateArticle() {
    // @ts-ignore
    this.article.title = document.getElementById('article-title').value;
    // @ts-ignore
    this.article.url = document.getElementById('article-url').value;
  }

  addNew() {
    this.articles.push(
      {
        // @ts-ignore
        title: this.title,
        // @ts-ignore
        url: this.url,
      }
    );
  }

  receiveFromLikes(value) {
    console.log(value);
  }
}
