/* 
* Problem -03. sorting words by length is a sentence by asc order
* Input: "Java is a programming language"
* Output: "a is Java language programming"
*/

const str1 = "Java is a programming language";

function sortWords (data) {
    const dataAsArray = data.split(" "); //* [ 'Java', 'a', 'is', 'language', 'programming' ]

    dataAsArray.sort((a, b) => {
        return a.length - b.length;
    });

    return dataAsArray.join(" ");
}

console.log(sortWords(str1));