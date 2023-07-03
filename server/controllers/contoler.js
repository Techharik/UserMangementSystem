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

    res.render('index',{locals,messages})
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
    console.log(exitsed)
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


