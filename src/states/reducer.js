import { combineReducers } from "redux";
import { reducerStateLoading } from "~/hooks/useLoading/reducer";
import { reducerStateTitle } from "~/hooks/useTitle/reducer";

export const reducerStateRedux = combineReducers({
  titles:reducerStateTitle,
  loading:reducerStateLoading
})