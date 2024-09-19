import { AsyncPipe } from '@angular/common'
import {Component, inject} from '@angular/core'
import { MainHeaderComponent } from '../../components/main-header/main-header.component'
import { UserInfoComponent } from '../../modules/user/components/user-info/user-info.component'
import {LoginService} from '../../modules/auth/services/login.service';

@Component({
    selector: 'app-user-settings',
    standalone: true,
    imports: [
        MainHeaderComponent,
        UserInfoComponent,
        AsyncPipe
    ],
    templateUrl: './user-settings.component.html',
    styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {
  loginService = inject(LoginService);

  logoutHandler(): void {
    this.loginService.logout();
  }
}
