import styled from 'styled-components'


export const Label = styled.label`
    display: block;
    margin: 1rem 1rem 0.5rem;
    font-weight: 600;
`

export const Select = styled.select`
    position: relative;
    padding: 0.5rem 0 0.5rem 1rem;
    border: 1px solid #0C66BA;
    outline: none;
    margin-bottom: 0.5rem;
    cursor: pointer;
    text-transform: capitalize;
    width: 100%;
    appearance: none;
    font-size: 17px;
    color: #555555
`

export const Wrapper = styled.div`
    margin: 2rem 0;

    .select {
        position: relative;
        width: 60%
    }

    .select::after {
        content: '<>';
        font: 17px "Consolas", monospace;
        color: #0C66BA;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        right: 11px;
        /*Adjust for position however you want*/
        
        top: 7px;
        padding: 0 0 2px;
        /*left line */
        
        position: absolute;
        pointer-events: none;
    }

    @media (max-width:700px) { 

        .select {
            width: 100%;
        }
    }

`