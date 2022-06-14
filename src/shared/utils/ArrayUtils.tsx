export function sortOrder(a:any, b:any, order = "asc"){
    if(a === null) {
        return 1;
    }

    if(b == null) {
        return -1;
    }

    if(a === b){
        return 0;
    }

    return a < b ? (order === "asc" ? -1 : 1) : (order === "asc" ? 1 : -1);
}