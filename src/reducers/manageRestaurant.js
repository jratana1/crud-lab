import cuid from 'cuid';
export default manageRestaurant

function manageRestaurant(state = {
    restaurants: []
  }, action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
        const restaurant = { id: cuid(), text: action.text }
        return { ...state, restaurants: [...state.restaurants, restaurant] }
      case 'DELETE_RESTAURANT':
        const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
        return { ...state, restaurants };
        default:
            return state;
    }
  }