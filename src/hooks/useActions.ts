import { useAppDispatch } from "./useAppDispatch"
import { bindActionCreators } from 'redux'
import ActionCreators from "../store/actionCreators/indexActions"

//хук позваляет удобно выбрать любой экшн или санку развёрнутые в store/actionCreators/indexActions.ts без дополнительного вызова диспатча
export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}