import memberModel from "../Model/member.model.js";

export async function updateMember(req, res) {
    try {
        const memberId = req.params.id;

        // Validate if the memberId is a valid MongoDB ObjectId
        if (!memberId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid ID!" });
        }

        const updateResult = await memberModel.updateOne(
            { _id: memberId },
            { $set: req.body }
        );

        if (!updateResult) {
            return res.status(404).json({ message: "Member doesn't exist." });
        }

        console.log("Member updated successfully");
        res.status(200).json({ message: "Member updated successfully." });

    } catch (error) {
        console.error("Error updating member:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
