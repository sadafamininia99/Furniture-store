import { func } from 'prop-types';
import React from 'react'
import { getProducts } from './Product'



// /actions


const Cart_Add = 'cart/ADD';
const CART_REMOVE = "cart/remove"
//

// reducerrsss


const initislState = {
  items: [],
  currency: "EUR"
}


export default function cart(state = initislState, action = {}) {
  switch (action.type) {
    case Cart_ADD:
      return handelCartAdd(state, action.payload)
    case CART_REMOVE:
      return handelCartRemove(state, action.payload)

    default: return state
  }
}



function handelCartAdd(state, payload) {
  return {
    ...state, items: [...state.items, payload.productId]


  };
  function CART_REMOVE(state, payload) {
    return {
      ...state,{
      items: state.items.filter(id => id !== payload.productId)
    }
  }

  //action creatores
  export function addToCart(productId) {
    return {
      type: Cart_ADD,
      payload: {
        productId
      }
    }

  }


  export function removeCart(productId) {
    return {
      type: CART_REMOVE,
      payload: {
        productId
      }
    }
  }