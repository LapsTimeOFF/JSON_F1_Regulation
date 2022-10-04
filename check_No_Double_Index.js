const file = require('./2022/json/Summary_2022_F1_Sporting_Regulations.json')

const knownIndex = [];
const doubleIndex = []

for (let _i = 0; _i < file.articles.length; _i++) {
    const article = file.articles[_i];
    const {index} = article

    if(knownIndex.includes(index)) {
        doubleIndex.push(index)
    } else {
        knownIndex.push(index)
    }
}

if (doubleIndex.length === 0) {
    console.log(`No double index`);
    return;
}
console.log(`${doubleIndex.length} double index`);
console.log(doubleIndex);