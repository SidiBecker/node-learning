module.exports = (app) => {

    app.get('/', function (req, resp) {
        resp.send(`<html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Hello World </h1>
                    </body> 
                </html>`)
    });


    app.get('/books', function (req, resp) {
        resp.send(`<html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Books </h1>
                    </body> 
                </html>`)
    });

};