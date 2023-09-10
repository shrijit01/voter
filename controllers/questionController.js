const Question = require('../models/Question');
const Option = require('../models/Option');

// Creating a new question
module.exports.createQuestion = async (req, res) => {
    try {
        const { title } = req.body;
        const question = Question.create({ title });
        console.log(question);
        
        res.status(201,{
            message:"Question is Created successfully",
            question : question
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create question' });
    }
};


// view a single question 
module.exports.viewQuestion = async function (req, res) {
    try {
        // Find the question by ID
        const question = await Question.findById(req.params.id);

        if (!question) {
            return res.status(404).json({
                message: "Question not found",
            });
        }

        // Find the options for the question
        const options = await Option.find({ question: question._id });


        return res.status(200).json({
            message: "Question found",
            question: question,
            options: options,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};


// showing all questions 
module.exports.allQuestion = async function(req,res){
    try {
        let allQuestion = await Question.find();

        return res.json(302, {
            message: "All Questions are Found ",
            question: allQuestion
        })
    }catch(err){
        console.log(err);
        return res.json(404,{
            message:"All Questions are not Found",
        })
    }
}


