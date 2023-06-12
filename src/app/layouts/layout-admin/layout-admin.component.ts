import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent {
  constructor(private tokenSerivce: TokenStorageService, private router: Router) {

  }
  logOut() {
    this.tokenSerivce.clearLocalstorage()
    this.router.navigateByUrl("/")
    return
  }
}
