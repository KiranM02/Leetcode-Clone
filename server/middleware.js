// // import JWT_SECRET from './index.js'
// // const {JWT_SECRET} = require ('./index')

// var jwt = require('jsonwebtoken')
// // const {JWT_SECRET} = require ('./index')
// import { JWT_SECRET  } from '.'

// setTimeout(()=>{
//     console.log("JWT_SECRET", JWT_SECRET)
// }, 5000)
// console.log("JWT_SECRET in middleware.js", JWT_SECRET)
// // module.exports = {

// export let auth = (req, res, next) => {
//         const authHeader = req.headers["authorization"]
//         if(!authHeader){
//             return res.status(403).json({msg: "Missing auth header"})
//         }
//         console.log('Hellooooo')
//         const decoded = jwt.verify(authHeader, JWT_SECRET)
//         if(decoded && decoded.id){
//             req.id = decoded.id
//             next()
//         }
//         else{
//             return res.status(403).json({msg: "Incorrect Token"})
//         }
//     }

// // var jwt = require('jsonwebtoken');
// // const { getJWTSecret } = require('./index');

// // module.exports = {
// //     auth: async (req, res, next) => {
// //         try {
// //             const authHeader = req.headers["authorization"];
// //             if (!authHeader) {
// //                 return res.status(401).json({ error: "Unauthorized", msg: "Missing authorization header" });
// //             }

// //             // Use async function to get JWT_SECRET
// //             const JWT_SECRET = await getJWTSecret();
// //             console.log("JWT_SECRET in middleware.js", JWT_SECRET);

// //             console.log('Hellooooo');
// //             const decoded = jwt.verify(authHeader, JWT_SECRET);
            
// //             if (decoded && decoded.id) {
// //                 req.id = decoded.id;
// //                 next();
// //             } else {
// //                 return res.status(401).json({ error: "Unauthorized", msg: "Incorrect Token" });
// //             }
// //         } catch (error) {
// //             console.error("Error:", error);
// //             if (error.name === 'TokenExpiredError') {
// //                 return res.status(401).json({ error: "Unauthorized", msg: "Token has expired" });
// //             } else {
// //                 return res.status(500).json({ error: "Internal Server Error", msg: "Something went wrong" });
// //             }
// //         }
// //     }
// // };

import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './index.js';  // Assuming that index.js is in the same directory
// import './index.js'

export function auth(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(403).json({ msg: "Missing auth header" });
    }

    try {
        
        const decoded = jwt.verify(authHeader, JWT_SECRET);

        if (decoded && decoded.id) {
            req.userId = decoded.id;
            console.log("id is same")
            next();
        } else {
            return res.status(403).json({ msg: "Incorrect Token" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
}
