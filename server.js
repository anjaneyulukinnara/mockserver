const express = require('express')
const app = express()
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var dataController = require('./dataController');

app.post('/signin', dataController.signin);
app.get('/', (req,res)=>{
    res.send('HI')
})
app.get('*', dataController.wild);
app.post('*', dataController.wild);

const port = 3600;

app.listen(port, () =>{
    console.log('listening')
});