import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ItemModel } from 'src/model/model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input('data') data: ItemModel;
  activeIndex: number = 0;

  @ViewChild('intersectContainer') IntersectContainer: ElementRef;
  @ViewChild('imageEl') imageEl: ElementRef;

  isImageLoaded: boolean = false;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    };
    let observer = new IntersectionObserver(this.observerCallback.bind(this), options);
    observer.observe(this.IntersectContainer.nativeElement);
  }

  observerCallback(entries: any, observer: any) {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      if (entry.isIntersecting
        && entry.target.className === 'card') {
        this.fetchImage(entry);
        observer.unobserve(entry.target);
      }
    }
  }


  fetchImage(entry?: any) {
    this.isImageLoaded = false;
    let imgSrc = this.imageEl.nativeElement.getAttribute('data-imagesrc');

    this.http.get(imgSrc,
      {
        responseType: 'blob',
        reportProgress: true,
        observe: "events",
        headers: new HttpHeaders(
          { 'Content-Type': 'application/json' })
      })
      .subscribe((event: any) => {

        if (event.type === HttpEventType.DownloadProgress) {
          const percentage = 100 / event.total * event.loaded;
          // this.imageProgress.nativeElement.value = percentage;
        }
        if (event.type === HttpEventType.Response) {
          if (entry) {
            entry.target.className = 'card';
          }
          this.imageEl.nativeElement.src = window.URL.createObjectURL(event.body);
          this.imageEl.nativeElement.className = '';
          this.isImageLoaded = true;
        }
      });
  }

  ngOnInit(): void {
  }

  next() {
    if (this.activeIndex >= this.data.Links.length - 1) {
      this.activeIndex = 0;
      this.fetchImage();
      return;
    }


    this.activeIndex++;
    this.fetchImage();
  }

  prev() {
    if (this.activeIndex <= 0) {
      this.activeIndex = this.data.Links.length - 1;
      this.fetchImage();
      return;
    }


    this.activeIndex--;
    console.log(this.activeIndex);
    this.fetchImage();
  }

}
