import { githubActions } from "../store/github/slices/github.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";

const actions = {
  ...githubActions,
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actions, dispatch);
};
