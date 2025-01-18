import express from "express";

const app = new express();

app.listen(8080, ()=>{
    console.log("Server is running on port: 8080");
})

export default app;

