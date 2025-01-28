import '../Middlewares/logMiddleware.js';

//Fetch all users
app.get("/users", (req,res)=>{
     res.status(200).send(users);
})