require('dotenv').config();
const express = require('express');
const app = express();
const Cors = require('cors')
const xssFilter = require('x-xss-protection')
const port = process.env.PORT || 1010
const bodyPraser = require('body-parser')
const user = require('./routes/user');
const score = require('./routes/score');
const logger = require('morgan')
app.use(
	bodyPraser.urlencoded({
		extended: false
	})
);

app.use(Cors())
app.use(bodyPraser.json());
app.listen(port);
app.use(xssFilter())
console.log('Connect Succes On '+port);
app.use(logger('dev'))
// app.use(logger('dev'))

//Route to endpoint
user(app);
score(app);

// var whitelist = ['http://192.168.6.141:3000', 'http://192.168.6.141:5151','http://192.168.6.141:5151',]
// var corsOptions = {
//   origin: function (origin, callback) {
// 	console.log("ORigin nya ",origin)
// 	if (whitelist.indexOf(origin) !== -1) {	
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(Cors())
// console.log("ORigin nya ")
// app.options(Cors(corsOptions))