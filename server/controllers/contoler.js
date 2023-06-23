
const homepage =async(req,res)=>{
   const locals={
    title:'HomePage',
    desc:'This is a homepage'
   }

    res.render('index',locals)
}

const add =(req,res)=>{
    res.send('add routes')
}


export default {
    homepage,
    add
}


