import { createContext } from 'react';
import {
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
export const SokubanContext = createContext({});
export const useDispatchSokuban = createDispatchHook(SokubanContext);
export const useSelectorSokuban = createSelectorHook(SokubanContext);