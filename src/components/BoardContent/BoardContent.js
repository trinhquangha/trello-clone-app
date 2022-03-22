import React, { useEffect, useRef, useState } from 'react';
import './BoardContent.scss';

import { Container, Draggable } from 'react-smooth-dnd';

import {
	Container as BootstrapContainer,
	Row,
	Col,
	Form,
	Button,
} from 'react-bootstrap';

import Column from 'components/Column/Column';

import { mapOrder } from 'utilities/sorts';
import { applyDrag } from 'utilities/dragDrop';

import { isEmpty } from 'lodash';

import { fetchBoardDetail, createNewColumn } from 'actions/apiCall';

const BoardContent = () => {
	const [board, setBoard] = useState({});
	const [columns, setColumns] = useState([]);
	const [openNewColumnForm, setOpenNewColumnForm] = useState(false);
	const [newColumnTitle, setNewColumnTitle] = useState('');

	const newColumnInputRef = useRef(null);

	useEffect(() => {
		const boardId = '62375035b1a588be64ed25e9';
		fetchBoardDetail(boardId).then((board) => {
			setBoard(board);
			setColumns(mapOrder(board.columns, board.columnOrder, '_id'));
		});
	}, []);

	useEffect(() => {
		if (newColumnInputRef && newColumnInputRef.current) {
			newColumnInputRef.current.focus();
			newColumnInputRef.current.select();
		}
	}, [openNewColumnForm]);

	if (isEmpty(board)) {
		return <div className="not-found">Board not found</div>;
	}

	const onColumnDrop = (dropResult) => {
		let newColumns = [...columns];
		newColumns = applyDrag(newColumns, dropResult);

		const newBoard = { ...board };
		newBoard.columnOrder = newColumns.map((column) => column._id);
		newBoard.columns = newColumns;

		setColumns(newColumns);
		setBoard(newBoard);
	};

	const onCardDrop = (columnId, dropResult) => {
		if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
			let newColumns = [...columns];

			let currentColumn = newColumns.find((column) => column._id === columnId);
			currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
			currentColumn.cardOrder = currentColumn.cards.map((card) => card._id);

			setColumns(newColumns);
		}
	};

	const toggleOpenNewColumnForm = () =>
		setOpenNewColumnForm(!openNewColumnForm);

	const addNewColumn = () => {
		if (!newColumnTitle) {
			newColumnInputRef.current.focus();
			return;
		}

		const newColumnToAdd = {
			boardId: board._id,
			title: newColumnTitle,
		};

    //Call API
		createNewColumn(newColumnToAdd).then(column => {
      const newColumns = [...columns];
      newColumns.push(column);

      const newBoard = { ...board };
      newBoard.columnOrder = newColumns.map((col) => col._id);
      newBoard.columns = newColumns;

      setColumns(newColumns);
      setBoard(newBoard);
      setOpenNewColumnForm(!openNewColumnForm);
    })
	};

	const onUpdateColumn = (newColumnToUpdate) => {
		const columnIdToUpdate = newColumnToUpdate._id;

		const newColumns = [...columns];
		const columnIndexToUpdate = newColumns.findIndex(
			(i) => i._id === columnIdToUpdate
		);

		if (newColumnToUpdate._destroy) {
			//remove column
			newColumns.splice(columnIndexToUpdate, 1);
		} else {
			newColumns.splice(columnIndexToUpdate, 1, newColumnToUpdate);
		}

		const newBoard = { ...board };
		newBoard.columnOrder = newColumns.map((column) => column._id);
		newBoard.columns = newColumns;

		setColumns(newColumns);
		setBoard(newBoard);
	};

	return (
		<div className="board-content">
			<Container
				orientation="horizontal"
				onDrop={onColumnDrop}
				getChildPayload={(index) => columns[index]}
				dragHandleSelector=".column-drag-handle"
				dropPlaceholder={{
					animationDuration: 150,
					showOnTop: true,
					className: 'column-drop-preview',
				}}>
				{columns.map((column, index) => (
					<Draggable key={index}>
						<Column
							column={column}
							onCardDrop={onCardDrop}
							onUpdateColumn={onUpdateColumn}
						/>
					</Draggable>
				))}
			</Container>
			<BootstrapContainer className="container">
				{!openNewColumnForm && (
					<Row>
						<Col
							className="add-another-column"
							onClick={toggleOpenNewColumnForm}>
							<i className="fa fa-plus icon"></i>Add another column
						</Col>
					</Row>
				)}

				{openNewColumnForm && (
					<Row>
						<Col className="enter-new-column">
							<Form.Control
								size="sm"
								type="text"
								placeholder="Enter column title..."
								className="input-new-column"
								ref={newColumnInputRef}
								value={newColumnTitle}
								onChange={(e) => setNewColumnTitle(e.target.value)}
								onKeyDown={(e) => e.key === 'Enter' && addNewColumn()}
							/>
							<div className="add-column-control">
								<Button size="sm" variant="success" onClick={addNewColumn}>
									Add column
								</Button>
								<span className="cancel-icon" onClick={toggleOpenNewColumnForm}>
									<i className="fa fa-trash icon"></i>
								</span>
							</div>
						</Col>
					</Row>
				)}
			</BootstrapContainer>
		</div>
	);
};

export default BoardContent;
