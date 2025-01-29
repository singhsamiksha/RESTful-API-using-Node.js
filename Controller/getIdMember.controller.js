import memberModel from "../Model/member.model.js";

export async function findMember(req, res) {
    try {
        const memberId = req.params.id;
        const member = await memberModel.findOne({ _id: memberId });

        if (!member) {
            return res.status(404).json({ message: "Member with this ID doesn't exist." });
        }

        res.status(200).json(member);
        console.log("Member found : " + member);
    } catch (error) {
        console.error("Error in finding the member with this id : ", req.params.id);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
