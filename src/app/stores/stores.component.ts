import {Component, Inject, OnInit} from '@angular/core';
import {StoresService} from '../stores.service';
import {Store} from '../models/store';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {


  public stores: Store[];
  constructor(private storesService: StoresService) { }
  ngOnInit() {
      this.getUserStores();
  }

  getUserStores() {
    this.storesService.getAllStores().subscribe(data => {
      this.stores = data;
      console.log(this.stores);
    });
  }

}
