import React from 'react';
import './Pad.scss';
import Border from './../../components/border/Border';
import PadSheet from '../../containers/pad-sheet/PadSheet';
import WorkSpace from '../../components/workspace/WorkSpace';
import BasketToggle from './../../components/basket-toggle/BasketToggle';
import Basket from './../../containers/basket/Basket';

function Pad() {
  return (
    <section className='pad'>
      <Border />
      <WorkSpace>
        <PadSheet></PadSheet>
        <Basket></Basket>
      </WorkSpace>
      <Border>
        <BasketToggle>CLICK</BasketToggle>
      </Border>
    </section>
  );
}

export default Pad;
