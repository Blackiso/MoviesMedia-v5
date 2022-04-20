import { StorageInterface } from "@core/interfaces/storage.interface";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorage implements StorageInterface {

    add(key: string, data: any): void {
        localStorage.setItem(key, data);
    }

    get(key: string) {
        return localStorage.getItem(key);
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }

}