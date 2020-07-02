import {AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {HttpService, Stats, User} from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss']
})
export class UsersListPageComponent implements OnInit, AfterViewInit {
  users: Stats[] = [];

  pageOfItems: Stats[];

  pageSize = 16;
  totalPages = 100;

  @Output() user: User;

  @ViewChild('mydiv', { static: false }) public mydiv: ElementRef<any>;
  @ViewChildren('userFirstName') public userFirstName: ElementRef<any>;

  constructor(
    private http: HttpService,
    private route: Router
  ) { }

  ngOnInit() {
    this.http.getUsers(0, this.pageSize).subscribe(response => {
      this.totalPages = response.totalPages;
      this.users = response.content.concat(Array((this.totalPages - 1) * this.pageSize ));
      console.log('pageSize ~> ', this.pageSize );
    });
  }


  onChangePage(pageOfItems: Array<any>) {
    this.http.getUsers(this.mydiv.pager.currentPage - 1, this.pageSize).subscribe(response => {
      this.pageOfItems = response.content;
    });
    this.pageOfItems = pageOfItems;

  }
  ngAfterViewInit() {
    console.log('userName -> from users', this.userFirstName);
  }

}


