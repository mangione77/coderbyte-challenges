function Palindrome(str) {
    var reverse = str.charAt(0) + str.substr(1)  
    if (reverse === str) {
        return true
    }
    else {
        return false
    }
}

Palindrome('eye')