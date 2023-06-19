import { usersLoadAction } from "../reducer/usersReducer";


export const loadUsers = (dispatch) => {

    const link = 'https://dummyjson.com/comments';
    fetch(link)
        .then(resp => resp.json())
        .then(json => dispatch(usersLoadAction(json)));

}