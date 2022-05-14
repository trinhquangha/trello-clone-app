import React from 'react';
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap';

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
									src="https://saybongda.com/wp-content/uploads/2021/05/Kai-Havertz2.jpg"
									alt="member-avatar"
								/>
								<img
									src="https://congluan.ex-cdn.com/resize/700x400/files/news/2021/02/18/tien-dao-erling-haaland-pha-ky-luc-champions-league-094022.jpg"
									alt="member-avatar"
								/>
								<img
									src="https://bangsport.net/wp-content/uploads/2021/03/160.jpg"
									alt="member-avatar"
								/>
								<img
									src="https://static.bongda24h.vn/medias/original/2020/11/12/son-heung-min-2.jpg"
									alt="member-avatar"
								/>
								<img
									src="https://bangsport.net/wp-content/uploads/2021/12/70.jpg"
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
