// test('ids should be equals', () => {
// 	const startTasksState: TaskStateType = {};
// 	const startTodolistsState: Array<TodoListType> = [];
//
// 	const action = AddTodoListAC("new todolist");
//
// 	const endTasksState = tasksReducer(startTasksState, action)
// 	const endTodolistsState = todolistsReducer(startTodolistsState, action)
//
// 	const keys = Object.keys(endTasksState);
// 	const idFromTasks = keys[0];
// 	const idFromTodolists = endTodolistsState[0].id;
//
// 	expect(idFromTasks).toBe(action.todolistId);
// 	expect(idFromTodolists).toBe(action.todolistId);
// });

import {StateUsersType, toggleIsButtons, usersReducer} from "./usersReducer";

let startState: StateUsersType;

beforeEach(() => {

	startState = {
		users: [],
		userPageSize: 10,
		currentPage: 1,
		totalCount: 1,
		toggleIsButtons:
			{userId: 1,	disableButton: false}


	}
})

test('Test toggle is buttons',() => {

	const userId = 10;
	const isToggle = true;


	// const endState = usersReducer(startState, toggleIsButtons(userId, isToggle))
	// expect(endState.toggleIsButtons.userId).toBe(10);
})