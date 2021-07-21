
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../app.component';


@Component({
	selector: 'app-table-price',
	templateUrl: './table-price.component.html',
	styleUrls: [ './table-price.component.scss' ]
})
export class TablePriceComponent implements OnInit {
  @Input() products : Observable<Product>;

	displayedColumns: string[] = [
		'id',
		'name',
		'demo-weight',
		'demo-symbol'
	];

	constructor() {}

	ngOnInit(): void {

  }

  ngAfterViewInit() {
    // this.products.subscribe(data => this.dataSource1 = [...data]);
    // console.log(this.dataSource1)

  }
}
