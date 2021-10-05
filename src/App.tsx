import styled, { createGlobalStyle } from 'styled-components';
import { Button } from './components/Button';
import { getToken } from './components/ThemeProvider';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${getToken('font-family-body', 'fonts')}
  }
`;
const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${getToken(4, 'space')};
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  > * {
    margin-bottom: ${getToken(3, 'space')};
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Flex>
          <h2>Primary Btn</h2>
          <Button variant="primary" icon="Save">
            Primary Button
          </Button>
          <h3>Disabled</h3>

          <Button variant="primary" icon="Save" disabled>
            Disabled
          </Button>
        </Flex>
        <Flex>
          <h2>Secondary Btn</h2>
          <Button variant="secondary" icon="Save">
            Save as...
          </Button>
          <h3>Disabled</h3>
          <Button variant="secondary" icon="Save" disabled>
            Save as...
          </Button>
        </Flex>
      </StyledApp>
    </>
  );
}

export default App;
