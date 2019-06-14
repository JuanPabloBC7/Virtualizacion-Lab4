const controller = {};

controller.list = (req, res) => {
	//res.send('Hello World');
	req.getConnection((err, conn) => {
		conn.query('SELECT  * FROM Pelicula', (err, peliculas) => {
			if (err){
				res.json(err);
			}
			//console.log(pelicula);
			res.render('peliculas', {
				data: peliculas
			});
		});
	});
};

controller.save = (req, res) => {
	const data = req.body;
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO Pelicula set ?', [data], (err, peliculas) => {
			//console.log(peliculas);
			res.redirect('/');
		});
	})
	//res.send('Works')
};

controller.edit = (req, res) => {
	const { ID_Peli } = req.params;
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM Pelicula WHERE ID_Peli = ?', [ID_Peli], (err, peliculas) => {
			//console.log(peliculas);
			res.render('peliculas_update', {
				data: peliculas[0]
			});
		});
	})
}

controller.update = (req, res) => {
	const { ID_Peli } = req.params;
	const newPelicula = req.body;
	req.getConnection((err, conn) => {
		conn.query('UPDATE Pelicula set ? WHERE ID_Peli = ?', [newPelicula, ID_Peli], (err, peliculas) => {
			//console.log(peliculas);
			res.redirect('/');
		});
	})
	//res.send('Works')
};

controller.delete = (req, res) => {
	const { ID_Peli } = req.params;
	req.getConnection((err, conn) => {
		conn.query('DELETE FROM Pelicula WHERE ID_Peli = ?', [ID_Peli], (err, row) => {
			//console.log(peliculas);
			res.redirect('/');
		});
	})
	//res.send('Works')
};

module.exports = controller;