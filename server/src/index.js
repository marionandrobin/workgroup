const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors');

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

    // Pass to next layer of middleware
    // next();
});

app.use(cors({origin: 'http://localhost:8888'}));

app.get('/test', function (req, res) {
  res.json({'text':'hello'});
})

app.get('/applePrice', function (req, res) {
  console.log("applePrice server");
  res.json({'price':123});
})

app.get('/totalInWallet/:price', function (req, res) {
  console.log("Totalinwallet server");
  console.log(req.params.price);
  let total = 200;
  let total_after_price = total - req.params.price;
  res.json({'new_total':total_after_price});
})

app.get('/listoptions', function (req, res) {
  console.log("List of the options");
  res.json({'list': ['test']});
});

app.post('/submit', function(req, res) {
    console.log("SUBMIT");
    console.log(req.body);
    // console.log(res);
    //console.log(res);
    res.send({ status: 'SUCCESS' });
});

app.listen(8888, function () {
  console.log('Example app listening on port 8888!')
});