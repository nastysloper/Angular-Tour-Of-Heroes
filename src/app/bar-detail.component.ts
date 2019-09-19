import { Component, Input } from '@angular/core';
import { Bar } from './bar';

@Component({
	selector: 'bar-detail',
	template: `
		<div *ngIf="bar">
			<h2>{{bar.name}} details!</h2>
			<div><label>ID:</label>{{bar.id}}</div>
			<div><label>Name:</label>
				<input [(ngModel)]="bar.name" placeholder="name"/>
			</div>
		</div>
	`,
	styles: [`
		h2, label {
			font-family: Arial;
		}
	`]
})

export class BarDetailComponent {
	@Input() bar: Bar;
}