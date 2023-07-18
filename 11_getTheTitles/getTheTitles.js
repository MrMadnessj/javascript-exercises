const getTheTitles = function(books) {
    let len = books.length-1;

    let titles = [];
    for(let i=0; i<=len; i++)
    {
        titles.push(books[i].title);
    }

    console.log(titles);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
