const initialState = [];

const addItems = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        
        case 'DELITEM':
            return state.filter(item => item.id !== action.payload.id);
            
        default:
            return state;
    }
};

export default addItems;
