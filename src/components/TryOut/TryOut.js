import styled from 'styled-components'
import {Link} from 'react-router-dom'
import React from 'react'

const TryOut = ()=>{
    return <Wrapper className="section">
        <h2>wanna try?</h2>
        <button className="order">
            <Link to="/menu">order now</Link>
        </button>
    </Wrapper>
}

const Wrapper = styled.section`
    text-transform: uppercase;
    h2{
        margin: 0 auto 2rem;
        width: 300px;
        text-align: center;
    }
    .order{
        background: var(--main);
        ${'' /* width: 150px; */}
        font-size: 1.2rem;
        cursor: pointer;
        border-radius: 25px;
        margin: 1rem auto;
        display: block;
        padding: 1.25rem 1rem;
        transition: var(--transition);
    }
    .order a{
        text-decoration: none;
        text-transform: uppercase;
        color: var(--clr-grey-3);
        letter-spacing: var(--spacing);    }
    .order:hover{
        background: var(--main-lighter);
    }
`

export default TryOut