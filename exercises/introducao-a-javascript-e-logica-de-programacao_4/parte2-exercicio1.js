let palindrome = 'desenvolmento';
let check ;

function verificaPalindrome (word) {
    if (word === palindrome) {
        check = true;
    } else {
        check = false;
    }
    return check; 
};

console.log(verificaPalindrome("palindrome"));