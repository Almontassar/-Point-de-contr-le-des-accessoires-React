// src/PlayersList.js
import React from 'react';
import Player from './Player';
import players from './players';
import { Container, Row, Col } from 'react-bootstrap';

function PlayersList() {
  return (
    <Container>
      <h2 className="my-4 text-center">Football Stars</h2>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;
