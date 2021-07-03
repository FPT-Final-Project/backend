import { Question } from '../models';

const askNewQuestion = async (information, req) => { 
    const question = await Question.create({
        ...information,
        patientId: req.user._id
    })
    return question
}
export default { 
    askNewQuestion
}