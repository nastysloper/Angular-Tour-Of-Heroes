import { Injectable } from '@angular/core';
import { Bar } from './bar';
import { BARS } from './mock-bars';

@Injectable()
export class BarService {
	getBars(): Promise<Bar[]> {
		return Promise.resolve(BARS);
	}

	getBarsSlowly(): Promise<Bar[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getBars()), 2000)
		});
	}
}