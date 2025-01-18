import app from "./server.js";
import users from "./data.js";

app.get("/users", (req,res)=>{
     res.send(users);
})