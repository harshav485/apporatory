import { Component, OnInit } from '@angular/core';
import { UserDataService  } from '../user-data.service'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  UserList: any = []
  CurrectUser : any = {}
  constructor(private _userdata:UserDataService) {
    this.UserList = this._userdata.setUserData()
   }

  ngOnInit(): void {
  }

}
