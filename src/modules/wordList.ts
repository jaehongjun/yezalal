import STATUS from "./state";

const WORD_LIST = "wordList/WORD_LIST" as const;

export const wordList = (payload: Array<object>) => ({
  type: WORD_LIST,
  payload
});

type WordListAction = ReturnType<typeof wordList>;

type WordListState = [
  {
    id: number;
    title: string;
    // todo...
  }
];

const initialState: WordListState = [
  {
    id: 0,
    title: "띵작"
  }
];

function listReducer(
  state: WordListState = initialState,
  action: WordListAction
) {
  switch (action.type) {
    case WORD_LIST:
      return state;
    default:
      return state;
  }
}

export default listReducer;
