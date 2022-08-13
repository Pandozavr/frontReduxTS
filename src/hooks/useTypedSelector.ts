import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

//типизированный юзСелектор
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

