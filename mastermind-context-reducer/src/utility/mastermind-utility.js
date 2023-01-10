export default function createSecret(level) {
    const digits = [];
    digits.push(createRandomDigit(1, 9));
    while (digits.length < level) {
        const digit = createRandomDigit(0, 9);
        if (digits.includes(digit)) continue;
        digits.push(digit);
    }
    let secret = digits.reduce((number, digit) => 10 * number + digit, 0);
    console.log(secret);
    return secret;
}

function createRandomDigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}