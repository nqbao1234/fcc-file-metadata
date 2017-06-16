let express = require('express');
let app = express();

let multer = require('multer');
let upload = multer({dest: 'uploads/'});

app.set('port', (process.env.PORT || 5000));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//---define functions and variables---

//---manage routes---
app.get('/', function(req, res) {
    // app.locals.api1_str = req.protocol + '://' + req.get('host') + '/api/imagesearch/funny cats?offset=10';
    // app.locals.api2_str = req.protocol + '://' + req.get('host') + '/api/latest/imagesearch';
    res.render('index.ejs');
});

app.post('/upload', upload.single('new_file'), function(req, res){
    console.log(req.file.size + " bytes");
    let json = {size: req.file.size};
    res.end(JSON.stringify(json));
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
