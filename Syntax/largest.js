function solve(...params) {

    return `Largest number is ${params.sort((a,b)=>a-b).pop()}`;
    /**
     * Second variant to solve
     *  return `Largest numbers is ${Math.max(...params)}`
     */
}

console.log(solve(5,-3,16,18,20));