let unique:number[] = [];
let same:boolean = false;

// Support function for statistic

export function isUnique(n:number = 404): boolean{
    if(n == 404) {  // Simple clean for array of unique numbers 
        unique = []; 
        return false;
    }
    unique.forEach( (el) => {
        if (el == n) {
            same = true;
            return;
        }
    });

    if (same) {
        same = !same;
        return false;
    }
    
    unique.push(n);
    return true;
}