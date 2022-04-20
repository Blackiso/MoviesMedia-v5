import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

    constructor(protected _sanitizer: DomSanitizer) {}

    transform(value: string, ...args: unknown[]): SafeResourceUrl {
        console.log(this._sanitizer.bypassSecurityTrustResourceUrl(value));
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}