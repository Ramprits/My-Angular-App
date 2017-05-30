import { Component, OnInit } from '@angular/core';
import { customers } from "app/common/customers";
import { products } from "app/product";
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'yo-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  sort: SortDescriptor[];

  constructor() { }

  ngOnInit() {
    
  }
  private gridData: any[] = products;
  
}
