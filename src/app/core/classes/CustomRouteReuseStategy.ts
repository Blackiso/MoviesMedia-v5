import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomRouteReuseStategy implements RouteReuseStrategy {

    handlers: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // if (route.data.noReuse) {
        //     return false;
        // }
        return false;
    }

    store(route: ActivatedRouteSnapshot, handle: {}): void {
        if (!route.data.shouldReuse && this.getUrl(route)) {
            this.handlers[this.getUrl(route)] = handle;
        }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!this.handlers[this.getUrl(route)];
    }

    retrieve(route: ActivatedRouteSnapshot): any {
        if (!this.getUrl(route)) {
            return null;
        }
        return this.handlers[this.getUrl(route)];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params);
    }

    getUrl(route: ActivatedRouteSnapshot) {
        if (!route.parent.url.join('/') || !route.url.join('/')) {
            return null;
        }
        let url = '';
        if (route.parent.url.join('/')) {
            url += route.parent.url.join('/') + '/';
        }
        if (route.url.join('/')) {
            url += route.url.join('/');
        }
        return url === '' ? null : url;
    }
}