const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const app = express()


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.post('/save', function(request,response){
    response.send({status:'Success', message: 'Data saved successfully.', data: request.body})
})
app.listen(port)
console.log("server started on port " + port)