import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
changePassword() {
throw new Error('Method not implemented.');
}
googleAction() {
throw new Error('Method not implemented.');
}
openSettings() {
throw new Error('Method not implemented.');
}
openSearch() {
throw new Error('Method not implemented.');
}
toggleDarkMode() {
throw new Error('Method not implemented.');
}
isDarkMode: any;

constructor(private router: Router) {}

logout(): void {
    // Remove the authentication token from local storage
    localStorage.removeItem('userToken');
    // Navigate to the login page
    this.router.navigate(['/auth']);
 }

}