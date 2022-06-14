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

interface compareByIdProps{
    Id: number
}

export function compareById<A extends compareByIdProps, B extends compareByIdProps>(arr1: A[], arr2: B[]){
    const ids = arr1.map((item: A) => item.Id);
    const idsSet = Array.from(new Set(ids));
    return arr2.filter( (item: any) => idsSet.indexOf(item.Animal.Id) !== -1);
}