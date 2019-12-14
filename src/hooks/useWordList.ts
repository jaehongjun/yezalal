import { useSelector } from "react-redux";
import { RootState } from "../modules";

function useWordList() {
  const wordList = useSelector((state: RootState) => state.wordList);

  return wordList;
}

export default useWordList;
