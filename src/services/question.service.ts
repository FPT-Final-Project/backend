import { Question } from '../models';

const askNewQuestion = async (information, req) => { 
    const question = await Question.create({
        ...information,
        patientId: req.user._id
    })
    return question
}
const getAllQuestions = async () =>{ 
    const allQuestion = await Question.find({})
    return allQuestion
}
export default { 
    askNewQuestion,
    getAllQuestions
}