const express=require('express')
const EmployeeModel=require('./model')
const cors=require('cors');

const app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/create',async(req,res)=>{
    const data=await new EmployeeModel(req.body)
    data.save()
    res.json(data)
})

app.get('/view',async(req,res)=>{
    const data=await EmployeeModel.find()
    res.json(data)
    console.log(data);
})

app.delete('/del/:id',async(req,res)=>{
    const id=req.params.id
    const data= await EmployeeModel.findByIdAndDelete(id)
    res.send("Data Deleted")
    
})

app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id;
    await EmployeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data Updated")
})

app.listen(3007,()=>{
    console.log("Listening to 3007");
})