export {}
function createZeroMatrix(rows: number, cols: number): number[][]{
    if(rows < 0|| cols  < 0){
        throw new RangeError(rows < 0 ? 'Not enough rows' :' Not enough cols' );
    }
    const matrix = Array.from({ length: rows} , ()=> new Array(cols).fill(0))
    return matrix
}


console.log(createZeroMatrix(4 ,9))