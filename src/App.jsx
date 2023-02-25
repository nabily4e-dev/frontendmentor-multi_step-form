/** @format */

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import styled from '@emotion/styled';
import Content from './components/Content/Content';
function App() {
  const ContainerStyled = styled.div`
    box-sizing: border-box;
    border-radius: 15px;
    margin: 20px;
    padding: 15px;
    width: 65%;
    background-color: #fff;
    display: flex;
  `;

  return (
    <div class='App'>
      <ContainerStyled>
        <Sidebar />

        <Content />

      </ContainerStyled>
    </div>
  );
}

export default App;
