import {AuthInitialStateType, authReducer, setAuth, setIsAuthLogin} from "./authReducer";


let initialState: AuthInitialStateType

beforeEach(() => {
	initialState = {
		id: 2,
		email: 'blabla@bla.bla',
		login: 'samurai',
		isAuth: false,
	}
})

test('test isAuth reducer', () => {

	const isAuth = true;

	const endState = authReducer(initialState, setIsAuthLogin(isAuth));

	expect(endState.isAuth).toBe(isAuth)

})

test('test set data', () => {
	const data = {
		id: 5,
		email: 'sdsda@com.by',
		login: 'Sergey',
	}

	const endState = authReducer(initialState, setAuth(data));

	expect(endState.id).toBe(data.id);
	expect(endState.email).toStrictEqual(data.email);
	expect(endState.login).toBe(data.login);
})