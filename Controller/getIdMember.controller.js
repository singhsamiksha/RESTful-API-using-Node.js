import memberModel from "../Model/member.model.js";

export async function findMember(req, res) {
    try {
        const memberId = req.params.id;

        // Validate if the memberId is a valid MongoDB ObjectId
        if (!memberId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid ID!" });
        }

        const member = await memberModel.findOne({ _id: memberId });

        if (!member) {
            return res.status(404).json({ message: "The ID does not exist." });
        }

        res.status(200).json(member);
        console.log("Member found: " + member);
    } catch (error) {
        console.error("Error in finding the member with this ID: ", req.params.id, error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
