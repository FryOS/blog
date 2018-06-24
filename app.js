const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));



app.get('/', (req, res) => {
	
		res.render('index');
	
})

// app.get('/create', (req, res) => res.render('create'));
// app.post('/create', (req, res) => {
// 	const {title, body} = req.body;
// 	Post.create({
// 		title, 
// 		body
// 	}).then(post => console.log(post.id));
//   res.redirect('/');
// });

module.exports = app;
