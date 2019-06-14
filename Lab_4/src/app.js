const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importing routes
const peliculaRoutes = require('./routes/pelicula');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
	host: 'jpbalan.cuabffohibgu.us-east-1.rds.amazonaws.com',
	user: 'admin',
	password: 'Juanpabloenano7',
	port: 3306,
	database: 'db_peliculas',
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', peliculaRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
	console.log('Server no port 3000');
});