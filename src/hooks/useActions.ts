import { useAppDispatch } from "./useAppDispatch"
import { bindActionCreators } from 'redux'
import ActionCreators from "../store/actionCreators/indexActions"

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}