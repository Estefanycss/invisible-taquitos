import { createMachine, assign } from 'xstate';

export const restaurantMachine = createMachine({
  id: 'restaurant',
  initial: 'welcome',
  context: {
    orders: 0
  },
  states: {
    welcome: {
      on: {
        CREATE_ORDER: 'makeOrder',
      }
    },
    makeOrder: {
      on: {
        CANCEL: 'welcome',
        GO_TO_PAY: 'pay',
      }
    },
    pay: {
      on: {
        SUCCESS: 'confirmation',
        RETURN: 'makeOrder',
        CANCEL: 'welcome',
      }
    },
    confirmation: {
      on: {
        CLOSE: {
          target: 'welcome',
          actions: assign({
            orders: (context, event) => context.orders + 1
          })
        }
      }
    }
  }
});
