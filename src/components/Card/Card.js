import React from 'react'
import './Card.scss'

const Card = ({ card }) => {
	return (
		<div className="card-item">
			{card.cover && (
				<img
					src={card.cover}
					className="card-cover"
					alt="alt-img"
					draggable="false"
				/>
			)}
			{card.title}
		</div>
	)
}

export default Card
