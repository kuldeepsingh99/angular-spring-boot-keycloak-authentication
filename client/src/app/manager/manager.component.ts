import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss'
})
export class ManagerComponent {

  managerData: any;

  constructor(private commonService: CommonService){}
  
  ngOnInit() {
    this.commonService.getManagerData().subscribe( (event)=> {
      console.log(event);
      this.managerData = event;
    });
  }
}
