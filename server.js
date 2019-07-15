var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();

var quotes = [
    {
        id: 1,
        quote: " The best is yet to come",
        author: 'Unknown',
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: 'First Last',
        year: 1930
    },
    {
        id: 3,
        quote: 'This is another quote',
        author: "First 2 Last 2",
        year: 1910
    }
];

app.get('/', function(request, response){
    response.send('Get request received at "/"');
}); 


app.get('/quotes', function(request, response){
    console.log("Get a list of all quotes as json");
    if(request.query.year){
        response.send("Return a list of quotes from the year: " + request.query.year);
    }
    else{
        response.json(quotes);
    }
    //response.json(quotes);
});

app.get('/quotes/:id', function(request, response){
    console.log("return quote with the ID: " + request.params.id);
    response.send("return quote with the ID: " + request.params.id)
});

// tell your express app to use body-parser as middleware for url-encoded form data
app.use(bodyParser.urlencoded({extended: true })); 

app.post('/quotes', function(request, response){
    console.log('Insert a new quote' + request.body.quote);
    response.json(request.body); // use request.body.quote to get the quote string; 
});



app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});