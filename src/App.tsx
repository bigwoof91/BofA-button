import styled, { createGlobalStyle } from 'styled-components';
import { Button } from './components/Button';
import {
  composeStyleProps,
  getToken,
  StyleProps,
} from './components/ThemeProvider';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${getToken('font-family-body', 'fonts')}
  }
`;
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: ${getToken(6, 'space')};
`;
const Flex = styled.div<StyleProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  ${composeStyleProps()}
`;
const Container = styled.div`
  margin-bottom: ${getToken(6, 'space')};
  margin-right: ${getToken(6, 'space')};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1>Button</h1>

        <Flex flexWrap="wrap">
          <Container>
            <h2>Primary</h2>
            <h3>Default</h3>
            <Flex>
              <Button variant="primary" icon="save" mr={2}>
                Save as...
              </Button>
              <Button variant="primary" icon="bin">
                Delete
              </Button>
            </Flex>
            <h3>Disabled</h3>
            <Flex>
              <Button variant="primary" icon="save" mr={2} disabled>
                Save as...
              </Button>
              <Button variant="primary" icon="bin" disabled>
                Delete
              </Button>
            </Flex>
          </Container>

          <Container>
            <h2>Secondary</h2>
            <h3>Default</h3>
            <Flex>
              <Button variant="secondary" icon="save" mr={2}>
                Save as...
              </Button>
              <Button variant="secondary" icon="bin">
                Delete
              </Button>
            </Flex>
            <h3>Disabled</h3>
            <Flex>
              <Button variant="secondary" icon="save" mr={2} disabled>
                Save as...
              </Button>
              <Button variant="secondary" icon="bin" disabled>
                Delete
              </Button>
            </Flex>
          </Container>
        </Flex>
      </StyledApp>
    </>
  );
}

export default App;
