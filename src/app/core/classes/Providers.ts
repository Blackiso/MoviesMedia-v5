import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';

export const LOADING = new InjectionToken<Subject<any>>("Loading");

let loadingSubjects = {};

export function LoadingFactory(x) {
	if (x in loadingSubjects) return loadingSubjects[x];
	return loadingSubjects[x] = new Subject<any>();
}