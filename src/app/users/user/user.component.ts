import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  paramsSubscribtion!: Subscription;
  user!: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

   this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

  this.paramsSubscribtion = this.route.params
      .subscribe(
      (params: Params) => {
        id: this.user.id = +params['id'];
        name: this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscribtion.unsubscribe();
  }

}
