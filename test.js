let datArray = [
    {name:'iron man',lead:'tony stark',collection:'200mi'},
    {name:'man of steel',lead:'clark',collection:'210mil'},
    {name:'spider man',lead:'peter parker',collection:'230mil'},
];

// Define the filter condition
const filterCondition = {name: 'iron man'};

// Use the filter method to search for objects that match the condition
const filteredArray = datArray.filter((obj) => {
    for (let key in filterCondition) {
        if (obj[key] !== filterCondition[key]) {
            return false;
        }
    }
    return true;
});

// Output the filtered result
console.log(filteredArray[0].name);
