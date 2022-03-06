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
					cardOrder: [
						'card-1',
						'card-2',
						'card-3',
						'card-4',
						'card-5',
						'card-6',
						'card-7'
					],
					cards: [
						{
							id: 'card-1',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 1',
							cover:
								'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/110568210_1123646481351948_6538492643415801928_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=vrp2kdTbm4YAX9WpSJp&_nc_oc=AQlDi-YpM0j5MHWqG6wxXATPiHXGO563Tw9oqW1XwCQOcTBJpscUSLN-9eCE9cc005zKYeCVz-AYQiZ2FBFQFQxR&tn=yEFNjTfteXy3uakU&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9V850eaNUbKIRcyKygndqCTYgNFhcx_Vdgy1PqSXe5eA&oe=624BB889'
						},
						{
							id: 'card-2',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 2',
							cover: null
						},
						{
							id: 'card-3',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 3',
							cover: null
						},
						{
							id: 'card-4',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 4',
							cover: null
						},
						{
							id: 'card-5',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 5',
							cover: null
						},
						{
							id: 'card-6',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 6',
							cover: null
						},
						{
							id: 'card-7',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 7',
							cover: null
						}
					]
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
							cover: null
						},
						{
							id: 'card-9',
							boardId: 'board-1',
							columnId: 'column-2',
							title: 'Title of card 9',
							cover: null
						},
						{
							id: 'card-10',
							boardId: 'board-1',
							columnId: 'column-2',
							title: 'Title of card 10',
							cover: null
						}
					]
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
							cover: null
						},
						{
							id: 'card-12',
							boardId: 'board-1',
							columnId: 'column-3',
							title: 'Title of card 12',
							cover: null
						},
						{
							id: 'card-13',
							boardId: 'board-1',
							columnId: 'column-3',
							title: 'Title of card 13',
							cover: null
						}
					]
				}
			]
		}
	]
}
