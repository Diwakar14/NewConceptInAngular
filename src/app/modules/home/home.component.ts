import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModelDataService } from 'src/app/services/model-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modelService: ModelDataService) { }

  allModels: any;

  ngOnInit(): void {
    let httpParams = new HttpParams()
      .set("pageNumber", 1)
      .set("order", 'ASC')
      .set("pageSize", 21)
      .set("q", '');

    this.modelService.getAllModel(httpParams).subscribe((data: any) => {
      this.allModels = data.data;
    });

    console.log(this.allModels)
  }

}
