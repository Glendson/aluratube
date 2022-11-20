import React from 'react'
import config from "../../config.json"
import styled from 'styled-components'

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  img{
    margin-top: 50px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

export default Header