import memberModel from '../Model/member.model.js';

export function createMember(req,res){
    const{Name,Age,Gender,Address,Phone} = req.body;

    const newMember = new memberModel({
        Name:Name,
        Age:Age,
        Gender:Gender,
        Address:Address,
        Phone:Phone
    });

    newMember.save().then((data)=>{
        if(!data){
            return res.status(400).json({message:"Something went wrong!"});
        }
        res.status(201).json(data);
    })
}