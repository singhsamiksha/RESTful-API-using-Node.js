import memberModel from "../Model/member.model.js";

export async function updateMember(req, res) {
    try {
        const memberId = req.params.id;

        const updateResult = await memberModel.updateOne(
            { _id: memberId },  
            { $set: req.body }   
        );

        // Check if the member was updated
        if (!updateResult.nModified === 0) {
            return res.status(404).json({ message: "Member doesn't exist or no changes made." });
        }

        console.log("Member updated successfully");
        res.status(200).json({ message: "Member updated successfully." });

    } catch (error) {
        console.error("Error updating member:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
