// src/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><strong>Team:</strong> {team}</Card.Text>
        <Card.Text><strong>Nationality:</strong> {nationality}</Card.Text>
        <Card.Text><strong>Jersey Number:</strong> {jerseyNumber}</Card.Text>
        <Card.Text><strong>Age:</strong> {age}</Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default Props
Player.defaultProps = {
  name: "Unknown",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/300x200.png?text=No+Image"
};

// PropTypes (optional but recommended)
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  image: PropTypes.string
};

export default Player;
