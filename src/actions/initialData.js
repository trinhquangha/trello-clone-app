export const initialData = {
	boards: [
		{
			id: 'board-1',
			columnOrder: ['column-1', 'column-2', 'column-3'],
			columns: [
				{
					id: 'column-1',
					boardId: 'board-1',
					title: 'To do',
					cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
					cards: [
						{
							id: 'card-1',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 1',
							cover: 'https://scontent.fpnh22-1.fna.fbcdn.net/v/t39.30808-6/272900017_1527660794283846_2968176870957752193_n.jpg?stp=dst-jpg_s600x600&_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=yhtlaH51qTkAX_dB7mM&_nc_ht=scontent.fpnh22-1.fna&oh=00_AT-wqipor5-JSxRy726c6wtCUmetm3VXCTGHZsZO9HBYMw&oe=62235185',
						},
						{
							id: 'card-2',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 2',
							cover: null,
						},
						{
							id: 'card-3',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 3',
							cover: null,
						},
						{
							id: 'card-4',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 4',
							cover: null,
						},
						{
							id: 'card-5',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 5',
							cover: null,
						},
						{
							id: 'card-6',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 6',
							cover: null,
						},
						{
							id: 'card-7',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 7',
							cover: null,
						},
					],
				},
				{
					id: 'column-2',
					boardId: 'board-1',
					title: 'Inprogress',
					cardOrder: ['card-8', 'card-9', 'card-10'],
					cards: [
						{
							id: 'card-8',
							boardId: 'board-1',
							columnId: 'column-2',
							title: 'Title of card 8',
							cover: null,
						},
						{
							id: 'card-9',
							boardId: 'board-1',
							columnId: 'column-2',
							title: 'Title of card 9',
							cover: null,
						},
						{
							id: 'card-10',
							boardId: 'board-1',
							columnId: 'column-2',
							title: 'Title of card 10',
							cover: null,
						},
					],
				},
				{
					id: 'column-3',
					boardId: 'board-1',
					title: 'Done',
					cardOrder: ['card-11', 'card-12', 'card-13'],
					cards: [
						{
							id: 'card-11',
							boardId: 'board-1',
							columnId: 'column-3',
							title: 'Title of card 11',
							cover: null,
						},
						{
							id: 'card-12',
							boardId: 'board-1',
							columnId: 'column-3',
							title: 'Title of card 12',
							cover: null,
						},
						{
							id: 'card-13',
							boardId: 'board-1',
							columnId: 'column-3',
							title: 'Title of card 13',
							cover: null,
						},
					],
				},
			],
		},
	],
};
