import { memo } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerState } from './reducer';
import {
  Provider as ReduxProvider,
} from 'react-redux';
import { SokubanContext } from './init';
const enhancerWithDevTools = composeWithDevTools();
const SokubanStates = createStore(reducerState, enhancerWithDevTools);
function SokubanProvider({ children }) {
  return (
    <ReduxProvider context={SokubanContext} store={SokubanStates}>
      {children}
    </ReduxProvider>
  );
}
export default memo(SokubanProvider);
