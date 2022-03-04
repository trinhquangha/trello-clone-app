import React from 'react';
import './Card.scss';

const Card = ({ card }) => {
	return (
		<li className="card-item">
			{card.cover && <img src={card.cover} className="card-cover" alt="alt-img" />}
			{card.title}
		</li>
	);
};

export default Card;