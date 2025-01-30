import memberModel from '../Model/member.model.js';

export function createMember(req, res) {
    const { Name, Age, Gender, Address, Phone } = req.body;

    // Validate required fields
    if (!Name || !Age || !Gender || !Address || !Phone) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const newMember = new memberModel({
        Name,
        Age,
        Gender,
        Address,
        Phone,
    });

    newMember
        .save()
        .then((data) => {
            res.status(201).json({ message: "New member created successfully.", data });
            console.log("Welcome, new member account is created!");
        })
        .catch((error) => {
            console.error("Error creating new member:", error.message);
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        });
}
