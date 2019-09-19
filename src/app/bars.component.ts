import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Bar } from './bar'
import { BarService } from './bar.service';

@Component({
  selector: 'my-bars',
  providers: [BarService],
  template: `
  	<h1>{{title}}</h1>
  	<h2>My Hero Bars</h2>
  	<ul class="bars">
  		<li *ngFor="let bar of bars" 
  		[class.selected]="bar === selectedBar"
  		(click)="onSelect(bar)" >
  			<span class="badge">{{bar.id}}</span> {{bar.name}}
  		</li>
  	</ul>
  	<bar-detail [bar]="selectedBar"></bar-detail>
  `,
  styles: [`
  h2 {
  	color: #369;
  	font-family: Arial;
  }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .bar {
  	background-color: #EEE;
  	width: 220px;
  	border-radius: 4px;
  	padding: .3em;
  	border: 2px solid #607D8B;
  	font-family: Arial;
  }
  .bars {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
    font-family: Arial;
  }
  .bars li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    margin-left: 0;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
    overflow: hidden;
  }
  .bars li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .bars li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .bars .text {
    position: relative;
    top: -3px;
  }
  .bars .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class BarsComponent implements OnInit { 
	
	bars: Bar[];
	selectedBar: Bar;

	constructor(private barService: BarService){ }

	ngOnInit(): void {
		this.getBars();
	}

	getBars(): void {
		this.barService.getBarsSlowly().then(
			bars => this.bars = bars
		);
	}

	onSelect(bar: Bar): void {
		this.selectedBar = bar;
	}	
}