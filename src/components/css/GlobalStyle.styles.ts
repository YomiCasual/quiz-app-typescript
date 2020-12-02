import styled, { createGlobalStyle } from 'styled-components'
import BcgImage from '../../images/background.jpg'


export const GlobalStyle = createGlobalStyle`
    * {
        border-box: box-sizing;
        margin: 0;
    }

    body {
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat', sans-serif;
    }

`

export const Wrapper = styled.div`
    display: flex;

    }

   
    .App {
        width: 50vw;
        padding: 3rem 6rem
    }

    .quizy {
        font-size: 1.3rem;
        font-weight: 400;
    }

    .header {
        color: #0C66BA;
        font-size: 64px;
        font-weight: 600
    }

    .background-image {
        background: url(${BcgImage}) center/cover no-repeat;
        height: 100vh;
        width: 50vw
    }

    .score {
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }


    
    @media (max-width:700px) {
        flex-direction: column;
        margin-bottom: 4rem;

        .background-image {
            order: 1;
            width: 100vw!important;
            height: 50vh;
        }

        .App {
            padding: 2rem!important;
            order: 2;
            width: 80vw;
        }

        .header {
            font-size: 36px
        }

`


export const Button = styled.button`
        outline: none;
        border: none;
        background-color: #EC1717;
        font-size: 20px;
        padding: 1rem 2rem;
        color: white;
        cursor: pointer;
        border-radius: 5px;

        @media (max-width:700px) { 
            font-size: 14px;
            padding: 1rem 1.3rem;

        }
    
`