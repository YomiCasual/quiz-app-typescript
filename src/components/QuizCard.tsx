import React from 'react';
import { ANSWEROBJECT } from '../App';
import { Wrapper, AnswerButton } from './css/QuizCard.styles'


type QuestionProps = {
    question: string;
    answers: string[];
    func: (e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: ANSWEROBJECT | undefined;
    questionNr: number;
    totalQuestions: number,
    changeWidth: number
}


const QuizCard:React.FC<QuestionProps> = ({
        question,
        answers,
        func,
        userAnswer,
        questionNr,
        totalQuestions,
        changeWidth
    }) => {

        return (
        <Wrapper>
             <div className="myProgress">
              <div className="myBar" style={{ width: `${changeWidth}%` }}></div>
                </div>
            <p className="questionNr">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p   className="question" dangerouslySetInnerHTML={{ __html: question }}></p>

            <div  className="button-class" >
                {answers.map(answer => (
                    <div key={answer} > 
                        <AnswerButton 
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked = {userAnswer?.answer === answer}
                        disabled={userAnswer ? true : false} 
                        onClick={func} 
                        value={answer}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </AnswerButton>
                    </div>
                ))}
            </div>
        </Wrapper>
)}

export default QuizCard;
