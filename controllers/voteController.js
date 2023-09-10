const Option = require('../models/Option');

// Add a vote to a specific option
exports.addVote = async (req, res) => {
    try {
        const { id } = req.params;

        // Fetch the option by its ID from the database
        const option = await Option.findById(id);
        if (!option) {
            // If the option doesn't exist, return a 404 error
            return res.status(404).json({ error: 'Option not found' });
        }

        // Increment the vote count for the option
        option.votes += 1;
        await option.save();

        // Construct the dynamic link based on the option's ID
        const linkToVote = `${req.protocol}://${req.get('host')}/options/${option._id}/add_vote`;

        // Include the link_to_vote in the response
        const response = {
            id: option._id,
            text: option.text,
            votes: option.votes,
            link_to_vote: linkToVote,
        };

        // Send a successful response
        res.status(200).json(response);
    } catch (error) {
        // Handle errors and send an error response if something goes wrong
        console.error(error);
        res.status(500).json({ error: 'Failed to add a vote' });
    }
};
