import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData: any = []
  constructor() {
    this.userData = [
      {
        "id": 1,
        "FullName": "Test1",
        "Email": "test1@email.com",
        "MobileNumber": "3287328328",
        "Gender": "Male",
        "User_Type": "client"
      },
      {
       "id": 2,
       "FullName": "Test2",
       "Email": "test2@email.com",
       "MobileNumber": "23883287",
       "Gender": "Female",
       "User_Type": "admin"
     },
     {
       "id": 3,
       "FullName": "Test3",
       "Email": "test3@email.com",
       "MobileNumber": "873288732",
       "Gender": "Female",
       "User_Type": "client"
     },
     {
       "id": 4,
       "FullName": "Test4",
       "Email": "test4@email.com",
       "MobileNumber": "328732877",
       "Gender": "Male",
       "User_Type": "admin"
     }
    ]
   }

   setUserData(){
     return this.userData
   }
}
