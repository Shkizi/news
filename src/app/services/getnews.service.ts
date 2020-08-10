import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetnewsService {

  constructor(
    private http: HttpClient,
  ) { }



  private apiKey = "d007ed4ee98c49deb09488f346cace84"


  getNews(topic: string) {
    let url = `https://newsapi.org/v2/top-headlines?country=pt&category=${topic}&apiKey=${this.apiKey}`
    return this.http.get<any>(url);
  }

  getSource() {
    const url = `https://newsapi.org/v2/sources?apiKey=${this.apiKey}`
    return this.http.get<any>(url);
  }

  getNewsByWord(word: string) {
    const url = `https://newsapi.org/v2/everything?q=${word}&apiKey=${this.apiKey}`
    return this.http.get<any>(url);
  }

}
