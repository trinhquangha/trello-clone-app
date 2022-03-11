import React, { useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { Dropdown, Form } from 'react-bootstrap'

import './Column.scss'

import Card from 'components/Card/Card'
import ConfirmModal from 'components/CommonModal/ConfirmModal'

import { mapOrder } from 'utilities/sorts'
import { MODAL_ACTION_CONFIRM } from 'utilities/constants'
import {
	selectAllInlineText,
	saveContentAfterPressEnter,
} from 'utilities/contentEditable'

const Column = ({ column, onCardDrop, onUpdateColumn }) => {
	const [showConfirmModal, setShowConfirmModal] = useState(false)
	const [columnTitle, setColumnTitle] = useState('')

	useEffect(() => {
		setColumnTitle(column.title)
	}, [column.title])
	const cards = mapOrder(column.cards, column.cardOrder, 'id')

	const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)

	const handleConfirmModalAction = (type) => {
		if (type === MODAL_ACTION_CONFIRM) {
			//remove action
			const newColumn = {
				...column,
				_destroy: true,
			}
			onUpdateColumn(newColumn)
		}
		toggleShowConfirmModal()
	}

	const handleChangeColumnTitle = (e) => {
		setColumnTitle(e.target.value)
	}

	const handleBlurColumnTitle = () => {
		const newColumn = {
			...column,
			title: columnTitle,
		}
		onUpdateColumn(newColumn)
	}

	return (
		<div className="column">
			<header className="column-drag-handle">
				<div className="column-title">
					<Form.Control
						size="sm"
						type="text"
						className="content-editable"
						value={columnTitle}
						onClick={selectAllInlineText}
						onBlur={handleBlurColumnTitle}
						onChange={handleChangeColumnTitle}
						onKeyDown={saveContentAfterPressEnter}
						onMouseDown={(e) => e.preventDefault()}
					/>
				</div>
				<div className="column-dropdown-actions">
					<Dropdown>
						<Dropdown.Toggle
							id="dropdown-basic"
							size="sm"
							className="dropdown-btn"
						/>

						<Dropdown.Menu>
							<Dropdown.Item>Add card...</Dropdown.Item>
							<Dropdown.Item onClick={toggleShowConfirmModal}>
								Remove column...
							</Dropdown.Item>
							<Dropdown.Item>Move all cards in this column...</Dropdown.Item>
							<Dropdown.Item>Archive all cards in this column...</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</header>
			<div className="card-list">
				<Container
					groupName="col"
					onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
					getChildPayload={(index) => cards[index]}
					dragClass="card-ghost"
					dropClass="card-ghost-drop"
					dropPlaceholder={{
						animationDuration: 150,
						showOnTop: true,
						className: 'card-drop-preview',
					}}
					dropPlaceholderAnimationDuration={200}>
					{cards.map((card, index) => (
						<Draggable key={index}>
							<Card card={card} />
						</Draggable>
					))}
				</Container>
			</div>
			<footer>
				<div className="footer-actions">
					<i className="fa fa-plus icon"></i>Add another card
				</div>
			</footer>

			<ConfirmModal
				show={showConfirmModal}
				onAction={handleConfirmModalAction}
				title="Remove column"
				content={`Are you sure you want to remove <strong>${column.title}</strong>. <br />All related cards will be removed!`}
			/>
		</div>
	)
}

export default Column
