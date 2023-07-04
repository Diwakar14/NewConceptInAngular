import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { PortalDirective } from 'src/app/directives/portal.directive';
import { ComponentType } from './ComponentType';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit, AfterViewInit {

  viewContainerRef: any
  @Input('component') component: ComponentType;
  @Input('state') isActive: boolean = false;
  @ViewChild(PortalDirective, { static: false }) portal!: PortalDirective;

  @HostListener("document:click", ['$event'])
  collapse(event: any) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      this.viewContainerRef.clear();
      this.isActive = false;
    } else {
      if (this.viewContainerRef) {
        let btn = event.target.classList;
        if (!btn.contains('btn')) {
          this.viewContainerRef.clear();
          this.isActive = false;
        }
      }
    }
  }


  constructor(private elementRef: ElementRef) {

  }

  ngAfterViewInit(): void {
    if (this.isActive)
      this.loadComponent();
  }

  ngOnInit(): void {

  }

  loadComponent() {
    this.viewContainerRef = this.portal.portalContainer;
    this.viewContainerRef.clear();

    const newContent = this.viewContainerRef.createComponent(this.component.component);
    newContent.instance.data = this.component.data;
  }

}
