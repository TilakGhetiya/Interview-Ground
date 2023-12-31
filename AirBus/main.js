const isBalanced = (brackets) => {
    if ((brackets.length % 2) != 0) return false; // if array length is odd then it should not be start and end braces.
    
    const arrayCheck = brackets.includes(i => i == '[' && i == ']');
    if (arrayCheck == -1) {
        return false;
    }

    const bracketCheck = brackets.includes(i => i == '(' && i == ')');
    if (bracketCheck == -1) {
        return false;
    }

    const curlyBrackets = brackets.includes(i => i == '{' && i == '}');
    if (curlyBrackets == -1) {
        return false;
    }

    return true;
}

console.log(isBalanced('[()]')) //true
console.log(isBalanced('[(]')) //false
console.log(isBalanced('({(())}{][})')) //false

// Proposed Solution
