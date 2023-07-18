const fibonacci = function(n) {
    let fe = 1; 
    let se = 2;
    let te;

    let series = [1,1,2];

    for(let i=3; i<n; i++)
    {
        te = fe + se;
        console.log(te);
        series.push(te);
        fe = se;
        se = te;
    }

    console.log(series);

    if(n>0)
        return series[n-1];

    else    
        return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
