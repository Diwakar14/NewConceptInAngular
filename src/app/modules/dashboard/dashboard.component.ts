import { Component, OnInit } from '@angular/core';

import data from '../../../model/data.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menuData: any[] = [];

  actualData: any = [];

  public GetType(type: any) {
    return typeof (type);
  }

  constructor() { }

  getKeys(item: any) {
    return Object.keys(item);
  }

  ngOnInit(): void {
    this.menuData = data.videos;
    console.log(this.menuData);

    this.getObject(this.menuData, this.actualData)
    console.log(this.actualData);
  }

  getObject(data: any, container: any[]) {
    // debugger;
    // console.log(item);

    let item = Object.keys(data);

    if (data instanceof Array) {
      console.log(container);
      container.push([item]);
    } else {
      container.push(item)
    }


    item.forEach(key => {
      let newitem = data[key];
      if (newitem instanceof Object) {

        this.getObject(newitem, item);
      }
    });




  }




}
