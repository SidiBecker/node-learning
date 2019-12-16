module.exports = function(app) {
    
    app.get('/books', function (req, res) {
        console.log('Books');
    });

    app.post('/books/list', function (req, res) {
        var param = req.body;

        console.log('Params: ' + JSON.stringify(param));

        param.start = param.start * 10;
        param.limit =  param.start + 100;

        res.send(param);
    });

}