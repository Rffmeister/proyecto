const request = require('request');
const url_api = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
​
// request.get(url_api, (err, res, body) => {
//     const json = JSON.parse(body);
//     console.log(json);
// });
​
const jsonSend = {
	"name": "Master",
	"last_name": "Miyagi",
	"nacionalidad": "USA",
	"biography": "Viejito karateka",
	"gender": "M",
	"age": 83
};

​
request.post(url_api, {form: jsonSend}, (err, res, body) => {
    console.log('🤠', res.statusCode);
    console.log(JSON.parse(body));
});
​
// CRUD OPERATIONS
// CREATE
// READ
// UPDATE
// DELETE
Contraer






