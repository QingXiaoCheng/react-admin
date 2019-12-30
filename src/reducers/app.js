

const app = (state={}, action='') =>{
    if(action.type === 'app'){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}


export default app