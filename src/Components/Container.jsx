import React from 'react';
import { useMachine } from "@xstate/react";
import { restaurantMachine } from '../Machines/restaurantMachine';
import { Welcome } from './Welcome';
import { Order } from './Order';
import { Pay } from './Pay';
import { Confirmation } from './Confirmation';

export const Container = () => {
  const[current, send] = useMachine(restaurantMachine);

  const renderContent = () => {
    console.log('MAQUINA', current);
    switch (current.value) {
      case 'makeOrder':
        return <Order send={send} />;
      case 'pay':
        return <Pay send={send} />;
      case 'confirmation':
        return <Confirmation send={send} />;
      default:
        return <Welcome send={send} orders={current.context.orders}/>;
    }
  };

  return (
    <div className="Container">
      {renderContent()}
    </div>
  );
};
