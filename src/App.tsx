import React, { useState } from 'react';
import QuizCard from './components/QuizCard'
import { fetchQuestions } from './components/api'
import OptionsSelector from './components/OptionsSelector'
import { shuffleArray } from './components/util'
import { GlobalStyle, Wrapper, Button } from './components/css/GlobalStyle.styles'

export type ANSWEROBJECT = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string
}


type QUESTION = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  questions: string[];
}

export type QUESTIONSTATE = QUESTION & {
  answers: [] 
}



const App:React.FC = () => {
  
  const[selectCat, setSelectCat] = useState<number>()
  const[selectDifficulty, setSelectDifficulty] = useState<string>("easy")
  
  const[changeWidth, setChangeWidth] = useState(0)

  const [start, setStart] = useState(false)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QUESTIONSTATE[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<ANSWEROBJECT[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  



  const TOTAL_QUESTIONS = 7

  //make the api flexible by allowing selection of categories and diffficulty

  const generateAPI = async() => {
    let cat, diff
 
    let url = await fetchQuestions(TOTAL_QUESTIONS)

    diff = `&difficulty=${selectDifficulty}`

    url += diff
    
    if (selectCat != null && selectCat !== 0) {
      cat = `&category=${selectCat}`
      url += cat
    }


    const response = await (await fetch(url)).json()
    return (
        response.results.map((question:QUESTION) => ({
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])

        }))

    )

  }


  
  // Trigger the trivia to start

  const startTrivia = async () => {
      
      setScore(0)
      setLoading(true)
      
      const questions = await generateAPI()
  
      setQuestions(questions)
      setLoading(false)
      setStart(true)
      setGameOver(false)
      setPercent(number)
  }


  //Select a category from the dropdown

  const changeCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectCat(parseInt(e.currentTarget.value))
  }


  // Select a difficulty from the dropdown

  const changeDifficulty = (e: React.MouseEvent<HTMLButtonElement>) => {
      setSelectDifficulty(e.currentTarget.value)
  }


  // go to the next question
  const nextQuestion = () => {
    setNumber(prev => prev + 1)
    setPercent(number + 1)
  }


  //confirm if the answer is correct

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

      let pickedOption = e.currentTarget.value
      let correct = false
     
      if (pickedOption === questions[number].correct_answer ) {
         setScore(prev => prev + 1)
         correct = true
      }
      const userAnswer = {
        question: questions[number].question,
        answer: pickedOption,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswers(prev => [...prev, userAnswer])

      if(userAnswers.length + 1 === TOTAL_QUESTIONS ) {
        setGameOver(true)
        setStart(false)
        setUserAnswers([])
        setNumber(0)
      }
  }

  const setPercent = (number:number) => {
    const percent = ((number + 1)/ TOTAL_QUESTIONS) * 100
    setChangeWidth(percent)
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper >
     <div className="App">
      <div>
      <h4 className="quizy">Quizy</h4>

   

      {
        (!start || userAnswers.length === TOTAL_QUESTIONS) &&  
        <div> 
          <h2 className="header">Practice Fun and Engaging Questions</h2>
            <OptionsSelector  
            changeCategory={changeCategory}
            changeDifficulty={changeDifficulty}
                />
        </div>
      }

{
        (start || gameOver) && 
          <p className="score">{gameOver ? "Last Score" : "Score"}: {score} / {TOTAL_QUESTIONS}</p>

      }

      {
        (!start || userAnswers.length === TOTAL_QUESTIONS) && 
        <Button onClick={startTrivia}>
        Get Started
        </Button>
      }
      {
        loading &&  <p>Loading Questions ....</p>
      }
       {
        !gameOver && questions.length > 0 && number !== questions.length &&
          <QuizCard 
        questionNr = {number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined }
        func={checkAnswer}
        changeWidth={changeWidth}
      />
      }

      {
        number + 1 > 0 && 
        number + 1 < TOTAL_QUESTIONS && userAnswers.length === number + 1 &&
        <Button onClick={nextQuestion}>
        Next Question
      </Button>
      }
      </div>
    </div>
    <div className="background-image"></div>

    </Wrapper>
    </>
  );
}

export default App;


