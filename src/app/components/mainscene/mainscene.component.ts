import { Component, OnInit, HostListener, HostBinding } from "@angular/core";
import { Observable } from "rxjs";
import { GetnewsService } from "src/app/services/getnews.service";
import { ActivatedRoute, Event, Router, NavigationEnd } from "@angular/router";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/';


@Component({
  selector: "app-mainscene",
  templateUrl: "./mainscene.component.html",
  styleUrls: ["./mainscene.component.scss"]
})
export class MainsceneComponent implements OnInit {
  faArrowUp = faArrowUp;

  scrolled = false;
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(document.documentElement.scrollTop == 0) {
      this.scrolled = false;
    }
    else {
      this.scrolled = true;
    }
  }

  //Observables
  news$: Observable<any>;
  category: string;

  constructor(
    private getnewsService: GetnewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // When route changes we make the component load again so it equals the route name with service name
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.getNewsByTopic();
  }

  getNewsByTopic() {
    this.category = this.route.snapshot.url[0].path;
    this.getnewsService
      .getNews(this.category)
      .subscribe(data => (this.news$ = data.articles));
  }

  goTop() {
    window.scrollTo(0,0);
  }
}
