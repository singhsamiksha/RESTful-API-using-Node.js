import memberModel from "../Model/member.model.js";

export async function deleteMember(req, res) {
    try {
        const memberId = req.params.id;

        // Find and delete member
        const deletedMember = await memberModel.deleteOne({_id:memberId});

        if (!deletedMember) {
            return res.status(404).json({ message: "Member doesn't exist with this ID." });
        }

        console.log(`Member with ID: ${memberId} is deleted`);
        res.status(200).json({ message: `Member with ID: ${memberId} has been deleted successfully.` });

    } catch (error) {
        console.error("Error deleting member:", error.message);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
