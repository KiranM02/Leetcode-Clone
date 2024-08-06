// const express = require('express')
import express, { response } from 'express'
const app = express()
const port = 5000

import cors from 'cors'


app.use(cors());

// var jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'


export const JWT_SECRET = "secret"
console.log("JWT_SECRET", JWT_SECRET)
// const { auth } = require("./middleware")
import { auth } from './middleware.js';
// import './middleware.js'
// import { Auth } from 'mongodb'

// export const JWT_SECRET = "secret"
// console.log("JWT_SECRET", JWT_SECRET)
// export {JWT_SECRET}  //  Differences between ES6 module system and CommonJs https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files
// module.exports = {JWT_SECRET}

// const bodyParser = require('body-parser')
import bodyParser from 'body-parser'
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonParser)

const PROBLEMS = [{
    problemId : 1,
    title : "2 Sum"
},
{
    problemId: 2,
    title: "Sudoku Solver"
},
{
    problemId: 3,
    title: "Container With Most Water"
}];

let USERS = [{
    id: 1,
    username: "K",
    password: "abcd"
},
{
    id: 2,
    username: "Ki",
    password: "ab"
}]

export {PROBLEMS}

let SUBMISSIONS = []

// USER_ID_COUNTER = USERS[USERS.length - 1].id++  // check the difference between this and following 2 lines
let USER_ID_COUNTER = USERS[USERS.length - 1].id
USER_ID_COUNTER++
console.log("USER_ID_COUNTER", USER_ID_COUNTER)

app.use(express.json())

app.get('/', function(req, res){
    res.send('Hello!! ')
    // res.send('Hello!! ' + USER_ID_COUNTER)
    // res.send(USER_ID_COUNTER)
})

app.get('/problems', function(req, res){
    const filteredProblems = PROBLEMS.map(x => ({problemId : x.problemId, title : x.title}))
    res.json({
        problems: filteredProblems
    })
})

// app.get('/api/problems', (req, res) => {
//     console.log('GET /api/problems');
//     const filteredProblems = PROBLEMS.map((x) => ({
//       problemId: x.problemId,
//       title: x.title,
//     }));
//     res.json({ problems: filteredProblems });
//   });

app.get('/problem/:id', (req, res) => {
    const id = req.params.id;
    const problem = PROBLEMS.find(x => x.problemId === +id);

    // function checkAge(x) {
    //     return x.problemId === id;
    //   }

    // const problem = PROBLEMS.find(checkAge);
    if(!problem){
        // res.send(problem)
        res.send('Problem not found')
        return res.status(411).json({})
    }

    res.json({
        // problemIs : problem,
        // hi : "Hello"
        problem
    })
})

app.post('/signup', function(req, res){
    if(req.body.username && req.body.password){
        username = req.body.username
        password = req.body.password
        // if(USERS.username === username && USERS.password === password){

        // }

        newUserCheck = USERS.find(x => x.username === username && x.password === password)
        if(!newUserCheck){
            USERS.push({"username":username, "password": password, "id": USER_ID_COUNTER})
            // USERS.push({username, password})
            res.json({
                user: username,
                userr: "username",
                newUser: newUserCheck,
                USERS
            })
        }
        else{
            res.json({
                newUser: "This is already taken"  // also assign status like 403 ... check the harkirat video at 20:26
            })
        }
    }
    else{
        res.json({data: "nodata"})
    }
    // res.json({
    //     user: "username"
    // })
})

app.post('/login', function(req, res){
    if(req.body.username && req.body.password){
        let username = req.body.username
        let password = req.body.password
        // if(USERS.username === username && USERS.password === password){

        // }

        let userCheck = USERS.find(x => x.username === username && x.password === password)
        if(userCheck){
            const token = jwt.sign({//to understand sign https://www.npmjs.com/package/jsonwebtoken
                id: userCheck.id
            }, JWT_SECRET)
            res.json({
                user: username,
                userr: "username",
                id: userCheck.id,
                USERS,
                token
            })
        }
        else{
            res.json({
                msg: "Invalid username or password"  
            })
        }
    }
    else{
        res.json({data: "nodata"})
    }

})

app.get('/me', auth, async (req, res) => {
    const user = USERS.find(x => x.id === req.userId)
    // res.json({user})
    res.json("Me "+ user + " username: " + user.username)
})

app.listen(port, ()=>{
    console.log('Listening on port ' + port)
})

// const express = require('express');
// const app = express();

// const PORT = 5000;

// const PROBLEMS = [ {
//         problemId: 1,
//         title: "2 Sum"
//     },
//     {
//         problemId: 2,
//         title: "Sudoku Solver"
//     }
// ];

// app.get('/problem/:id', (req, res) => {
//     const id = req.params.id;
//     const problem = PROBLEMS.find(x => x.problemId === +id);

//     if (!problem) {
//         return res.status(404).json({ error: 'Problem not found' });
//     }

//     res.json({
//         problemIs: problem,
//         hi: 'Hello'
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



app.post('/submission', auth, function(req, res){
    const check = Math.random()
    const submitted = (check>0.5) ? true : false
    const problemId = req.body.problemId
    const submission = req.body.submission
    const idd = req.id

    if(submitted){
        SUBMISSIONS.push({problemId, submission, userId: idd, status: 'Accepted'})
        res.json({status : 'Accepted'})
    }
    else{
        SUBMISSIONS.push({problemId, submission, userId: idd, status: 'Rejected'})
        res.json({status : 'Rejected'})
    }
})

app.get('/loginn', function(req, res){
    res.json({})
})

// export {JWT_SECRET}