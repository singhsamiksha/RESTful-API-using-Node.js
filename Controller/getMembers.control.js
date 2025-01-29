import memberModel from '../Model/member.model.js';

export async function allMembers(req, res) {
    try {
        const data = await memberModel.find();
        if (!data) {
            return res.status(404).send({ message: "Not Found!" });
        }
        res.send(data);
        console.log("This is the data of all members!");
    } catch (err) {
        console.error("Error fetching member:", err);
        res.status(500).json({ message: "Internal server error!" });
    }
}
