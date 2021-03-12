import cuid from 'cuid';
export default manageReview

function manageReview(state = {
    reviews:[]
  }, action) {
    switch (action.type) {
        case 'ADD_REVIEW':
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
            
            return { ...state, reviews: [...state.reviews, review] }
    
        case 'DELETE_REVIEW':
           
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }
    
          default:
            return state;
        }
}