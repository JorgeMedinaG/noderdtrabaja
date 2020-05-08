const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



const mysql_pool = mysql.createPool({
    connectionLimit:100,
    host : 'localhost',
    user : 'root',
    password : 'YbrW}qB3u;YuYZM',
    database : 'rdtrabaja',
    // socketPath: '/tmp/mysql.sock'
});

// connection.connect(err => {
//     if (err){
//         console.log(err);
//         return err;
        
//     }
// });

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from server");
});

app.post('/api/registerinfo', function(req, res){
    console.log('API CALL: register');
    console.log(req.body);
    console.log(req);
    var nombre = (req.body.nombre == null ? 'NA' : req.body.nombre) ;
    var apellido = (req.body.apellido  == null ? 'NA' : req.body.apellido ); 
    var telefonofijo = (req.body.telefonofijo == null ? 'NA' : req.body.telefonofijo) ;
    var telefonomovil = (req.body.telefonomovil == null ? 'NA' : req.body.telefonomovil) ;
    var email = (req.body.email == null ? 'NA' : req.body.email) ;
    var nacionalidad = (req.body.nacionalidad == null ? 'NA' : req.body.nacionalidad) ;
    var sexo = (req.body.sexo == null ? 'NA' : req.body.sexo) ;
    var ciudad = (req.body.ciudad == null ? 'NA' : req.body.ciudad) ;
    var pais = (req.body.pais == null ? 'NA' : req.body.pais) ;
    var callenumero = (req.body.callenumero == null ? 'NA' : req.body.callenumero) ;
    var barrio = (req.body.barrio == null ? 'NA' : req.body.barrio) ;
    var birthdate = (req.body.birthdate == null ? 'NA' : req.body.birthdate) ;
    var nivel = (req.body.nivel == null ? 'NA' : req.body.nivel) ;
    var titulo = (req.body.titulo == null ? 'NA' : req.body.titulo) ;
    var habilidad1 = (req.body.habilidad1 == null ? 'NA' : req.body.habilidad1) ;
    var habilidad2 = (req.body.habilidad2 == null ? 'NA' : req.body.habilidad2) ;
    var habilidad3 = (req.body.habilidad3 == null ? 'NA' : req.body.habilidad3) ;
    var habilidad4 = (req.body.habilidad4 == null ? 'NA' : req.body.habilidad4) ;
    var habilidad5 = (req.body.habilidad5 == null ? 'NA' : req.body.habilidad5) ;
    var puesto1 = (req.body.puesto1 == null ? 'NA' : req.body.puesto1) ;
    var empresa1 = (req.body.empresa1 == null ? 'NA' : req.body.empresa1) ;
    var startdate1 = (req.body.startdate1 == null ? 'NA' : req.body.startdate1) ;
    var finishdate1 = (req.body.finishdate1 == null ? 'NA' : req.body.finishdate1) ;
    var puesto2 = (req.body.puesto2 == null ? 'NA' : req.body.puesto2) ;
    var empresa2 = (req.body.empresa2 == null ? 'NA' : req.body.empresa2) ;
    var startdate2 = (req.body.startdate2 == null ? 'NA' : req.body.startdate2) ;
    var finishdate2 = (req.body.finishdate2 == null ? 'NA' : req.body.finishdate2) ;
    var puesto3 = (req.body.puesto3 == null ? 'NA' : req.body.puesto3) ;
    var empresa3 = (req.body.empresa3 == null ? 'NA' : req.body.empresa3) ;
    var startdate3 = (req.body.startdate3 == null ? 'NA' : req.body.startdate3) ;
    var finishdate3 = (req.body.finishdate3 == null ? 'NA' : req.body.finishdate3); 
    
  
    console.log(nombre );
    console.log(apellido ) ;
    console.log(telefonofijo );
    console.log(telefonomovil );
    console.log(email );
    console.log(nacionalidad );
    console.log(sexo );
    console.log(ciudad );
    console.log(pais );
    console.log(callenumero );
    console.log(barrio );
    console.log(birthdate );
    console.log(nivel );
    console.log(titulo );
    console.log(habilidad1 );
    console.log(habilidad2 );
    console.log(habilidad3 );
    console.log(habilidad4 );
    console.log(habilidad5 );
    console.log(puesto1 );
    console.log(empresa1 );
    console.log(startdate1 );
    console.log(finishdate1 );
    console.log(puesto2 );
    console.log(empresa2 );
    console.log(startdate2 );
    console.log(finishdate2 );
    console.log(puesto3 );
    console.log(empresa3 );
    console.log(startdate3 );
    console.log(finishdate3 );
 
    var query = 'INSERT INTO informaciones (nombre , apellido , telefonofijo , telefonomovil ,email ,nacionalidad ,'+
                'sexo ,ciudad ,pais ,callenumero ,barrio ,birthdate ,nivel ,titulo ,habilidad1 , habilidad2 , habilidad3 ,' +
                'habilidad4 , habilidad5 ,puesto1 ,empresa1 ,startdate1 ,finishdate1 ,puesto2 ,empresa2 ,startdate2 ,finishdate2 ,'+
                'puesto3 ,empresa3 ,startdate3 ,finishdate3 ) values ("'+nombre+'", "'+apellido+'", "'+telefonofijo+'", "'+telefonomovil+'", "'+email+'", "'+
                nacionalidad+'", "'+sexo+'", "'+ciudad+'", "'+pais+'", "'+callenumero+'", "'+barrio+'", "'+birthdate+'", "'+nivel+'", "'+titulo+'", "'+
                habilidad1+'", "'+habilidad2+'", "'+habilidad3+'", "'+habilidad4+'", "'+habilidad5+'", "'+puesto1+'", "'+empresa1+'", "'+startdate1+'", "'+
                finishdate1+'", "'+puesto2+'", "'+empresa2+'", "'+startdate2+'", "'+finishdate2+'", "'+puesto3+'", "'+empresa3+'", "'+startdate3+'", "'+
                finishdate3+'");';

    mysql_pool.getConnection(function(err, connection) {
		if (err) {
			// connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
          }

          console.log('Got Connection');

          connection.query(query, function(err2, results) {	

        if(err2){
            return res.send(err2);   
        } else {
            return res.json({
                data: results
            })
            
        }

        });
        console.log('mysql_pool.release()');
        connection.release();
    });

});

app.get('/api/info', (req, res) => {

    console.log("API CALL: info")
    var select = 'select * from informaciones';
	mysql_pool.getConnection(function(err, connection) {
		if (err) {
			// connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
          }

          console.log('Got Connection');

          connection.query(select, function(err2, results) {	

        if(err2){
            return res.send(err2);
            console.log(err2);
        } else {
            return res.json({
                data: results
            })
        }

        });
        console.log('mysql_pool.release()');
        connection.release();
    });



});

app.listen(4000,() => {
    console.log('Server listening on port 4000');
});