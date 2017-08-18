/**
 * Created by 57450 on 2017/5/5.
 */
const express=require('express');
const app=express();
const path=require('path');
var bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended: true}) );
app.use( '/', express.static( __dirname + '/public') );
app.listen(8080);