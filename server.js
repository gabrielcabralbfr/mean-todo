var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function (req, res) {
    res.send('\
    <!DOCTYPE html>\
    <html>\
        <head>\
            <title>MEAN ToDo App</title>\
        </head>\
        <body>\
        <h1>\
            Hello worldsss!\
            <script src="bundle-todoapp.js"></script>\
        </body>\
    </html>\
    ');
});

app.listen(PORT, function() {
    console.log('Server running MTF. PORT: ', PORT);
})