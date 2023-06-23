import 'dotenv/config'
import express from 'express';
import expressLayout from 'express-ejs-layouts';
import routes from './server/routes/mainroutes.js'

const app =express();
const PORT = 3000 || process.env.PORT

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