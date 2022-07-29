import { Component, OnInit } from '@angular/core';
import { AurthorService } from './aurthor.service';

@Component({
  selector: 'app-aurthor',
  templateUrl: './aurthor.component.html',
  styleUrls: ['./aurthor.component.css']
})
export class AurthorComponent implements OnInit {

  aurthors;
  constructor(service:AurthorService) {
    this.aurthors = service.getAurthors();
   }

  ngOnInit(): void {
  }

}
