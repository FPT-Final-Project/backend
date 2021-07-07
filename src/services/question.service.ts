import { Question } from '../models';

const askNewQuestion = async (information, req) => {
    const question = await Question.create({
        ...information,
        patientId: req.user._id
<<<<<<< HEAD
    });
    return question;
};
const getAllQuestions = async () => {
    const allQuestion = await Question.find({});
    return allQuestion;
};
export default {
    askNewQuestion,
    getAllQuestions
};
=======
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
>>>>>>> 1835606 ( implement comment api)
