export function sortAsc(a:any, b:any){
    if(a === null) {
        return 1;
    }

    if(b == null) {
        return -1;
    }

    if(a === b){
        return 0;
    }

    return a < b ? -1 : 1;
}