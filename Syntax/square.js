function solve(delimiter,n) {
   let result = new Array(n);

   for(let i=0; i<n; i++){
       result[i] = delimiter.repeat(n).split("").join(" ");
   }
   return result.join("\n");
}
console.log(solve("*",5));