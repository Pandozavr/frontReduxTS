import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AvaInfo } from "./AvaInfo/AvaInfo";
import { Posts } from "./Posts/Posts";
import { getIsLoadingValue } from "../../../store/selectors/profileSelectors";
import { Loader } from "../../common/Loader/Loader";

export const Profile = () => {
  const preloadValue = useTypedSelector(getIsLoadingValue);

  return (
    <div>
      {!preloadValue ? (
        <>
          <AvaInfo />
          <Posts />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
