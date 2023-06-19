const USERS_LOAD = 'USERS_LOAD';


export const usersLoadAction = (payload) => ({type: USERS_LOAD, payload});



export const usersReducer = (state = [], action) => {
    if (action.type === USERS_LOAD){
        console.log(action.payload);
        return action.payload.comments
    }else return state
}