var express = require( 'express' );

var port = 8088;
var app = express();

app.use( express.static( 'public' ) );

var server = app.listen( port, () => {
    console.log( `Serving public on http://localhost:${port}` );
} )