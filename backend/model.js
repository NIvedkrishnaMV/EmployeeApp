const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://nivedkrishna14:nived@cluster0.tl8t6aw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to DB");
})
.catch((error)=>{
    console.log(error)
})
let mongoSchema= mongoose.Schema

const UserSchema= new mongoSchema({
    eName:String,
    eAge:Number,
    ePosition:String,
    eSalary:Number
})

const UserModel=mongoose.model('EmployeeList',UserSchema)

module.exports=UserModel;