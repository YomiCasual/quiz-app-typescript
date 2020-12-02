import styled from 'styled-components'

export const Wrapper = styled.div`

    .score {
        font-size: 1.5rem;
        color: #0C66BA;
        margin-bottom: 1rem;
    }

    .questionNr {
        font-size: 1rem;
        margin-bottom: 0.5rem
    }

    .question {
        font-size: 2rem
    }

    .myProgress {
        width: 100%;
        background-color: #E5E5E5;
        border-radius: 20px;
        margin: 2rem 0rem 1rem;
        padding: 0.5rem
    }

    .myBar {   
            
              height: 25px;
              border-radius: 20px;
              background-color: #0C66BA;
              transition: all 1s ease;
              margin: 2px 5px;
    }

    .button-class {
        margin-top: 1rem
    }

    @media (max-width:700px) { 
        margin-bottom: 2rem
    }
`

type AnswerButtonProps = {
    correct: boolean,
    userClicked: boolean
}


export const AnswerButton = styled.button<AnswerButtonProps>`
    outline: none;
    border: none;
    border-bottom: 1px solid #555555;
    user-select: none;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    width: 100%;
    color: #555555;
    font-size: 1.3rem;
    background-color: white;
    text-align: left;
    cursor: pointer;
    transition: 0.5s all linear;

    &:hover, &:focus, &:active {
        background-color: #0C66BA;
        color: white;
    }

    &:disabled {
        background-color: ${({correct, userClicked}) => (
            correct ? "#75d875" : !correct && userClicked ? "#e62c2e" : "#555555"
    ) };
        opacity:  ${({correct, userClicked}) => (
            correct ? 1 : !correct && userClicked ? 1 : 0.3
    ) };
        color: black
    }
    
`