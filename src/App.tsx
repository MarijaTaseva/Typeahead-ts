import React, { Fragment } from 'react';
import styled from 'styled-components'
import GlobalStyle from './globalStyle'
import { Provider } from 'react-redux'
import store from './store'
import Typeahead from "./components/Typeahead";

const StyledDiv = styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <StyledDiv>
          <Typeahead />
        </StyledDiv>
      </Provider>
    </Fragment>
  );
}
export default App;