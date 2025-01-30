import memberModel from "../Model/member.model.js";

export async function deleteMember(req, res) {
    try {
        const memberId = req.params.id;

        // Validate if the memberId is a valid MongoDB ObjectId
        if (!memberId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid ID format." });
        }

        const deleteResult = await memberModel.deleteOne({ _id: memberId });

        if (!deleteResult) {
            return res.status(404).json({ message: "Member doesn't exist with this ID." });
        }

        console.log(`Member with ID: ${memberId} has been deleted.`);
        res.status(200).json({ message: `Member with ID: ${memberId} has been deleted successfully.` });

    } catch (error) {
        console.error("Error deleting member:", error.message);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
