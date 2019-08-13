require('dotenv').config();
const express = require('express');
const app = express();
const Cors = require('cors')
const xssFilter = require('x-xss-protection')
const port = process.env.PORT || 1010
const bodyPraser = require('body-parser')
const user = require('./routes/user');
const score = require('./routes/score');

app.use(
	bodyPraser.urlencoded({
		extended: false
	})
);
app.use(bodyPraser.json());
app.listen(port);
app.use(xssFilter())
console.log('Connect Succes On '+port);
// app.use(logger('dev'))

//Route to endpoint
user(app);
score(app);

// var whitelist = ['https://libraryskuy.netlify.com/book', 'http://example2.com']
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
// app.options(Cors(corsOptions))