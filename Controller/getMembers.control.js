import memberModel from '../Model/member.model.js';

export async function allMembers(req, res) {
    try {
        const data = await memberModel.find();

        if (data.length === 0) {
            return res.status(404).json({ message: "No members found." });
        }

        res.status(200).json(data);
        console.log("Successfully fetched all members!");
    } catch (err) {
        console.error("Error fetching members:", err.message);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
}
