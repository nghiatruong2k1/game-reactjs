import { memo } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerStateRedux } from './reducer';
import { Provider as ReduxProvider } from 'react-redux';
import Title from './Title';
import { GlobalContext } from './init';

const enhancerWithDevTools = composeWithDevTools();
const GlobalStates = createStore(reducerStateRedux, enhancerWithDevTools);

function GlobalStatesComponent({ children }) {
  return (
    <ReduxProvider context={GlobalContext} store={GlobalStates}>
      <Title />
      {children}
    </ReduxProvider>
  );
}
export default memo(GlobalStatesComponent);
