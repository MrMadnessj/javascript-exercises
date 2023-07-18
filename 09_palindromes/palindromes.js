const palindromes = function (sentance) {
    let word = sentance;

    word = word.toLowerCase();

    word = word.replace(/[\.,?!]/g, "");
    word = word.replace(/ /g,"");
    

    let rev_str = "";

    for(let i=word.length-1; i>=0; i--)
        rev_str = rev_str + word[i];

    console.log(word);
    console.log(rev_str);

    if(rev_str == word)
        return true;
    else 
        return false;

};


// Do not edit below this line
module.exports = palindromes;
