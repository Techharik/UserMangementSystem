import 'dotenv/config'
import express from 'express';
import expressLayout from 'express-ejs-layouts';
import routes from './server/routes/mainroutes.js'
import connectDb from './server/config/db.js';
import session from 'express-session'
// import flash from 'express-flash-message';
import flash from 'connect-flash'



const app =express();
const PORT = 5000 || process.env.PORT

//bodyParser
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//static Routes
app.use(express.static('public'))

//layout setting;
app.use(expressLayout)
app.set('layout','./layout/main')
app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     res.render('index')
// })

//* Adding session
app.use(session({
  secret:'My secret is secret',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false } //1 week
}))

//* Adding Flash

app.use(flash());

/**
 * *Database connections*
 */

connectDb()










/* 
*router folders
 */

app.use('/',routes)






 /*
  * * 404 page;
  */

 app.get('*',(req,res)=>{
    res.status(404).render('404')
 })



app.listen(PORT,()=>{
    console.log(`Port is listening on ${PORT}`)
})