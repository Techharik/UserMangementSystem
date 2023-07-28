import userModal from "../modal/coustomer.js"

/*
! Get HomePage
*/
const homepage =async (req,res)=>{
    const messages =  req.flash('info')

   const locals={
    title:'HomePage',
    desc:'This is a homepage'
   }

   try{
    let perPage =12;
    let page = req.query.perPage || 1

    const customers = await userModal.aggregate([{$sort:{CreatedAt:-1}}])
    .skip(perPage*page - perPage)
    .limit(perPage)
    .exec()
    const count = await userModal.count();

    res.render('index',{locals,
        messages, 
        customers,
        currentPage:page,
        pagesCount:Math.ceil(count/perPage)
    })

   }catch(e){
    console.log(e)
   }

    
}

/*
! Get Add form Page
*/
const addCoustomer =async(req,res)=>{
    const locals={
     title:'Add HomePage',
     desc:'This is a homepage'
    }
 
     res.render('coustomer/add',locals)
 }






/*
! Post Coustmers;
*/

const PostCoustomer = async (req,res)=>{

   const {firstName,lastName,email,Telephone}=req.body

   const exitsed = await userModal.findOne({firstName,email})
  
   if(exitsed){
    res.send('User already exists')
   }else{
    try{
        const newUser = new userModal({
            firstName,lastName,email,Telephone
        });

        await newUser.save()
        await req.flash('info', 'Coustomer Added Successfully');

        res.redirect('/')
       }catch(e){
         res.send('Failed to add user')
    }
   }

 
}








export default {
    homepage,
    addCoustomer,
    PostCoustomer
}


