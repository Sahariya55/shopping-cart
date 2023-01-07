export const initialState = {
  cartList:[],
  productList:[{
    title: 'The Psychology of Money',
    price: '1.02',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg'
  },
  {
    title: 'Life Amazing Secrets',
    price: '2.03',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg'
  },
  {
    title: 'Atomic Habits',
    price: '3.04',
    rating: '5',
    imageURL: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg.jpg'
  },
  {
    title: 'Rich Dad Poor Dad',
    price: '4.00',
    rating: '3',
    imageURL: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY400_.jpg'
  },
  {
    title: 'Ikigai: The Japanese secret to a long and happy life [Hardcover] García, Héctor',
    price: '5.00',
    rating: '5',
    imageURL: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY400_.jpg'
  },
  {
    title: 'Grandma Bag of Stories: Collection of 20+ Illustrated short stories',
    price: '6.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY400_.jpg'
  },
  {
    title: 'Word Power Made Easy',
    price: '7.00',
    rating: '5',
    imageURL: 'https://m.media-amazon.com/images/I/818e+fq7+BL._AC_SY400_.jpg'
  },
  {
    title: 'The Power of your subconscious mind',
    price: '8.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY400_.jpg'
  },
  {
    title: 'Attitude Is Everything',
    price: '9.00',
    rating: '3',
    imageURL: 'https://m.media-amazon.com/images/I/710jnzKlDTL._AC_SY400_.jpg'
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
      case 'CLEAR_CART':
        return{
          ...state,
         cartList:[]
        };
    default:
      return state;
  }
}