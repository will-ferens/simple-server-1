//const cohorts = require('./data/cohorts.js')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

var cohorts = [{
    "id": 1,
    "cohortName": "17-01-WD-DP",
    "cohortCode": "g100",
    "numberOfStudents": 28
}, {
    "id": 2,
    "cohortName": "17-01-DS-GT",
    "cohortCode": "g105",
    "numberOfStudents": 24
}, {
    "id": 3,
    "cohortName": "17-02-WD-PX",
    "cohortCode": "g109",
    "numberOfStudents": 30
}, {
    "id": 4,
    "cohortName": "17-03-WD-BD",
    "cohortCode": "g110",
    "numberOfStudents": 29
}]

app.get('/', (req, res) => res.json({data: cohorts}))

app.listen(3000)