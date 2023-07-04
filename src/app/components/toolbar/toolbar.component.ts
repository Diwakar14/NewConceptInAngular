import { Component, OnInit } from '@angular/core';
import { ToolbarMenu } from 'src/model/toolbar-menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menus = ToolbarMenu;
  constructor() { }

  ngOnInit(): void {

  }

  setActiveMenu(index: number) {
    this.menus = this.menus.map(item => ({ ...item, isActive: false }));
    this.menus[index].isActive = true;
  }

}
