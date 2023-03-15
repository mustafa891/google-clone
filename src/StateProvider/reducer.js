export const initialState = {
    term : null,
}

export const ACTIONS = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM",
}

export const reducer = (state, action) => {
  console.log(action, state);
    switch(action.type) {
        case ACTIONS.SET_SEARCH_TERM : 
          return {
            term : action.term
          } 

        defualt :
         return state;
    }

}