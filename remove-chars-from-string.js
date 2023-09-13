// https://www.codewars.com/kata/5547929140907378f9000039

function shortcut(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return string.split('').filter(c => !vowels.includes(c)).join('')
}