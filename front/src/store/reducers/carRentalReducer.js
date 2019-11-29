export default function(state = [], action) {
    switch (action.type) {
      case "SEARCH_CAR_RENTALS":
        return action.carRentals
        ;

      default:
        return state;
    }
  }
  