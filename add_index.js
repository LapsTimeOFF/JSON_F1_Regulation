const file = require('./2022/json/Summary_2022_F1_Sporting_Regulations.json')
const fs = require('fs')

let newJSON = {}

newJSON.file_issue = file.file_issue
newJSON.released_on = file.released_on
newJSON.articles = []


for (let _i = 0; _i < file.articles.length; _i++) {
    const article = file.articles[_i];
    
    newJSON.articles[_i] = {
        "index": _i+1,
        "name": article.name,
        "page": article.page
    }
}

fs.writeFileSync('./2022/json/Summary_2022_F1_Sporting_Regulations.json', JSON.stringify(newJSON), (e) => {
    if (e) {
        throw e;
    }
})