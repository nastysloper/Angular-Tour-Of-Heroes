import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<a routerLink="/bars">Bars</a>
		<router-outlet></router-outlet>
	`
})

export class AppComponent {

	title = 'Tour of Heroic Candy Bars';
}