import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-branch-card',
  templateUrl: './branch-card.component.html',
  styleUrls: ['./branch-card.component.css']
})
export class BranchCardComponent implements OnInit {
@Input() branch:any;
  constructor() { }

  ngOnInit(): void {

  }

}
