const Question = require('../models/Question');
const Option = require('../models/Option');

// Add options to a specific question
module.exports.createOption = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;

        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        const option = new Option({ text, question: question._id });
        await option.save();

        question.options.push(option);
        await question.save();

        res.status(201).json({message:"option is Created successfully ",option});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create option' });
    }
};
