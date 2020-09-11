import React, {} from 'react'
import styled from 'styled-components'

const Cards = styled.div`
background-color: gray;
display: flex;
flex-direction: column;
white-space: nowrap;
align-items: center;
font-family: sans-serif;
border: 2px black solid;
margin: 2rem;
color: white;
`

export default function Characters(props) {
    
    const { data } = props;
    console.log( data );
    return(
        <div>
            {data.map(card => (
                <Cards>
                    <h3>Character: {card.name}</h3>
                    <p>Born: {card.birth_year}</p>
                </Cards>
            ))}
        </div>
    )
}
