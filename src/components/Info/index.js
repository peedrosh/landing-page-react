import React from 'react';

import { Container } from './styles';

function Info({ reverse, image, title, description }) {
  return (
    <Container reverse={reverse}>
      <div>
        <img src={image} alt=""/>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Container>
  );
}

export default Info;
