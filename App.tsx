import React from 'react';
import {Container, Body, Card, Center, Row, Col} from 'rnmui';

function App() {
  return (
    <Container>
      <Body backgroundColor={'grey'} style={{padding: 20}}>
        <Card
          elevation={0}
          style={{height: 300}}
          backgroundColor={'white'}></Card>
      </Body>
    </Container>
  );
}

export default App;
