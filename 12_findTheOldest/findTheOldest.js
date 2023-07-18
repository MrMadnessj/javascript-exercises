const findTheOldest = function(list) {
    let age = -1;
    let name = "";
    const currentYear = 2023;

    for(let i=0; i<list.length; i++)
    {
        let person = list[i];
        let ageo;

        if(person.yearOfDeath)
            ageo = person.yearOfDeath - person.yearOfBirth;
        else    
            ageo = currentYear - person.yearOfBirth;

        if(ageo > age)
        {
            age = ageo;
            name = person.name;
        }
    }


    return name;

};

// Do not edit below this line
module.exports = findTheOldest;
