const express = require('express')
const app = express()
const port = 4000
let pagesize = 5;

const fs = require('fs');
let ArrayStudent;
let FileName = './student.json';
fs.readFile(FileName, 'utf-8', (err, data) => {
    if (err) {
        console.log('chcg');
    } else {
      
        ArrayStudent = JSON.parse(data);
        console.log(ArrayStudent);
    }
});
app.get("/student", (req, res) => {
    let page = req.query.page;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    start = (page-1) * pagesize;
    end = start + pagesize;
    res.send(ArrayStudent.slice(start, end));
});
app.listen(port);