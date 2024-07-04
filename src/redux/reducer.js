const initialState = {
    userInfo: {},
    questions: [],
    answers: {}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_INFO':
        return {
          ...state,
          userInfo: action.payload
        };
      case 'SET_QUESTIONS':
        return {
          ...state,
          questions: action.payload
        };
      case 'SET_ANSWERS':
        return {
          ...state,
          answers: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  