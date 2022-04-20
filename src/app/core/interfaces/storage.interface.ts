export interface StorageInterface {
    add(key:string, data:any):void;
    get(key:string):any;
    remove(key:string):void;
}