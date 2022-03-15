import React, { useEffect, useState, useRef } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { Button, Dropdown, Form } from 'react-bootstrap'

import './Column.scss'

import Card from 'components/Card/Card'
import ConfirmModal from 'components/CommonModal/ConfirmModal'

import { mapOrder } from 'utilities/sorts'
import { MODAL_ACTION_CONFIRM } from 'utilities/constants'
import {
	selectAllInlineText,
	saveContentAfterPressEnter,
} from 'utilities/contentEditable'
import cloneDeep from 'lodash/cloneDeep'

const Column = ({ column, onCardDrop, onUpdateColumn }) => {
	const [showConfirmModal, setShowConfirmModal] = useState(false)
	const [columnTitle, setColumnTitle] = useState('')

	const [openNewCardForm, setOpenNewCardForm] = useState(false)
	const [newCardTitle, setNewCardTitle] = useState('')

	const newCardTextareaRef = useRef(null)

	useEffect(() => {
		setColumnTitle(column.title)
	}, [column.title])

	useEffect(() => {
		if (newCardTextareaRef && newCardTextareaRef.current) {
			newCardTextareaRef.current.focus()
			newCardTextareaRef.current.select()
		}
	}, [openNewCardForm])

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

	const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

	const addNewCard = () => {
		if (!newCardTitle) {
			newCardTextareaRef.current.focus()
			return
		}

		const newCardToAdd = {
			id: Math.random.toString(35).substr(2, 5), // 5 random character
			boardId: column.boardId,
			columnId: column.id,
			title: newCardTitle,
			cover: null,
		}

		const newColumn = cloneDeep(column)
		newColumn.cards.push(newCardToAdd)
		newColumn.cardOrder.push(newCardToAdd.id)

		onUpdateColumn(newColumn)
		setNewCardTitle('')
		toggleOpenNewCardForm()
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
							<Dropdown.Item onClick={toggleOpenNewCardForm}>
								Add card...
							</Dropdown.Item>
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

				{openNewCardForm && (
					<div className="add-new-card-area">
						<Form.Control
							size="sm"
							as="textarea"
							rows="3"
							placeholder="Enter a title for this card..."
							className="textarea-new-card"
							ref={newCardTextareaRef}
							value={newCardTitle}
							onChange={(e) => setNewCardTitle(e.target.value)}
							onKeyDown={(e) => e.key === 'Enter' && addNewCard()}
						/>
						<div className="add-card-control">
							<Button size="sm" variant="success" onClick={addNewCard}>
								Add card
							</Button>
							<span className="cancel-icon" onClick={toggleOpenNewCardForm}>
								<i className="fa fa-trash icon"></i>
							</span>
						</div>
					</div>
				)}
			</div>
			{!openNewCardForm && (
				<footer>
					<div className="footer-actions" onClick={toggleOpenNewCardForm}>
						<i className="fa fa-plus icon"></i>Add another card
					</div>
				</footer>
			)}

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
