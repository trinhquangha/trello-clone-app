// Select all input value when click
export const selectAllInlineText = (e) => {
	e.target.focus()
	e.target.select()
}

// onKeyBoard
export const saveContentAfterPressEnter = (e) => {
	if (e.key === 'Enter') {
		e.preventDefault()
		e.target.blur()
	}
}
