let initialState = {
	list: [],
};

if (localStorage.getItem('list')) {
	initialState.list = JSON.parse(localStorage.getItem('list'));
} else {
	initialState.list = [];
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO': {
			const newList = [...state.list];
			newList.push(action.payload);
			return {
				...state,
				list: newList,
			};
		}

		case 'UPDATE_TODO': {
			const todoId = action.payload.id;
			return {
				...state,
				list: state.list.map((todo) =>
					todo.id === todoId
						? {
								...todo,
								status: action.payload.status,
						  }
						: todo
				),
			};
		}

		case 'REMOVE_TODO':
			return {
				...state,
				list: state.list.filter((item) => item.id !== action.payload),
			};

		case 'REMOVE_All_TODO':
			return {
				...state,
				list: state.list.filter(
					(item) => item.status !== action.payload
				),
			};

		default:
			return state;
	}
};
export default todoReducer;
