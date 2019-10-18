const operationMap = {
    "+":(x,y)=> x+y,
    "-":(x,y)=> x -y,
    "*":(x,y)=> x*y,
    "/":(x,y)=>x/y,
    "%":(x,y)=>x%y
};
function solve(operation, ...params){
     return params.reduce((a,b)=>operationMap[operation](
         a,Number(b)
     ),Number(params.shift()));
}

console.log(solve("+",5,6,4,5,225,30,29));