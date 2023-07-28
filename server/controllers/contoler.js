import userModal from "../modal/coustomer.js"

/*
! Get HomePage
*/
const homepage =async (req,res)=>{
    const messages =  req.flash('info')
    const deleteMsg = req.flash('Delete')
   const locals={
    title:'HomePage',
    desc:'This is a homepage'
   }

   try{
    let perPage =12;
    let page = req.query.page || 1

    const customers = await userModal.aggregate([{$sort:{CreatedAt:-1}}])
    .skip(perPage*page - perPage)
    .limit(perPage)
    .exec()
    const count = await userModal.count();

    res.render('index',{locals,
        messages, 
        customers,
        currentPage:page,
        pagesCount:Math.ceil(count/perPage),
        deleteMsg
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
     title:'Add HomePage-Save',
     desc:'This is a homepage'
    }
 
     res.render('coustomer/add',{locals})
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



/*
! Get view user Page
*/


const viewCoustomer = async(req, res)=>{
    const userId = req.params.userId;
    
    try{
        const viewUser =await userModal.findById({_id:userId})
        console.log(viewUser)
        res.render('coustomer/view',{viewUser})
        
    }catch{
        console.log('error')
    }
}



/*
! Get view user Page
*/


const editCoustomer = async(req, res)=>{
    const userId = req.params.userId;
    
    try{
        const editUser =await userModal.findById({_id:userId})
       
       const updateSuccess= req.flash('UPDATE')
        res.render('coustomer/edit',{editUser,updateSuccess})
        
    }catch{
        console.log('error')
    }
}
/*
! Update view user Page
*/


const editCoustomerInfo = async(req, res)=>{
    const userId = req.params.userId;
    console.log(userId)
    try{
        const UpdateUser = await userModal.replaceOne({_id:userId},req.body)
        req.flash('UPDATE','user Updated Successfully')

        res.redirect(`/edit/${req.params.userId}`,)

    }catch(e){
        console.log(error)
    }
}

const deleteCoustomerInfo = async(req, res)=>{
    const userId = req.params.userId;
    console.log(userId)
    try{
        const UpdateUser = await userModal.deleteOne({_id:userId})
        await req.flash('Delete','user Deleted Successfully')

        res.redirect('/')

    }catch(e){
        console.log(error)
    }
}



export default {
    homepage,
    addCoustomer,
    PostCoustomer,
    viewCoustomer,
    editCoustomer,
    editCoustomerInfo,
    deleteCoustomerInfo
}


