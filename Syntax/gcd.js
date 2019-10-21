function gcd(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Type of numbers is invalid";
    } else {
        let x = Math.abs(num1);
        let y = Math.abs(num2);

        while (y) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
}

console.log(gcd(15, 5)); //5
console.log(gcd("1", "2")); //type of numbers invalid
