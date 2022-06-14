export function sortOrder(a:any, b:any, order = "asc"){

    console.log("sortOrder", order)

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