import React from 'react';
import './BasketToggle.scss';

function BasketToggle(props, ref) {
  function toggleBasket() {
    let basket = document.querySelector('.basket');
    basket.classList.toggle('basket_shown');
  }

  return (
    <div className='basket-toggle'>
      <button className='basket-toggle__button' onClick={toggleBasket}>
        {props.children}
      </button>
    </div>
  );
}
export default BasketToggle;
