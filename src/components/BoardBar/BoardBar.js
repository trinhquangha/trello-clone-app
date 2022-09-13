import React from 'react';
import { Col, Container as BootstrapContainer, Row } from 'react-bootstrap';

import './BoardBar.scss';

const BoardBar = () => {
	return (
		<nav className="navbar-board">
			<BootstrapContainer className="trello-container">
				<Row>
					<Col sm={10} xs={12} className="col-no-padding">
						<div className="board-info">
							<div className="item board-logo-icon">
								<i className=" fa fa-coffee" />
								&nbsp;&nbsp;<strong>My Workspace</strong>
							</div>
							<div className="divider"></div>

							<div className="item board-type">Private Workspace</div>
							<div className="divider"></div>

							<div className="item member-avatar">
								<img
									src="https://anhdep123.com/wp-content/uploads/2020/11/anh-cau-thu.jpg"
									alt="member-avatar"
								/>
								<img
									src="https://anhdep123.com/wp-content/uploads/2020/11/Ve-ngoai-dien-trai-khien-nhieu-fan-ham-mo-thich-thu.jpg"
									alt="member-avatar"
								/>
								<img
									src="https://anhdep123.com/wp-content/uploads/2020/11/anh-cau-thu-messi-696x464.jpeg"
									alt="member-avatar"
								/>
								<img
									src="https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-cau-thu-cong-phuong-dep.jpg"
									alt="member-avatar"
								/>
								<img
									src="https://anhdep123.com/wp-content/uploads/2020/11/anh-quang-hai.jpg"
									alt="member-avatar"
								/>
								<img
									src="https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-cau-thu-doan-van-lam.jpg"
									alt="member-avatar"
								/>
								<span className="more-members">+7</span>
								<span className="invite">Invite</span>
							</div>
						</div>
					</Col>

					<Col sm={2} xs={12} className="col-no-padding">
						<div className="board-actions">
							<div className="item menu">
								<i className="fa fa-ellipsis-h mr-2"></i>
								Show menu
							</div>
						</div>
					</Col>
				</Row>
			</BootstrapContainer>
		</nav>
	);
};

export default BoardBar;
