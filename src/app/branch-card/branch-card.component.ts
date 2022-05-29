import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-card',
  templateUrl: './branch-card.component.html',
  styleUrls: ['./branch-card.component.css']
})
export class BranchCardComponent implements OnInit {
@Input() branch:any;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  goToRestaurants(){
    this.router.navigate(['/restaurants'],{ queryParams: { branch_type_id: `${this.branch.id}` } });

  }

}
