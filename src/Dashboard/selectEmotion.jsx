import * as types from "../_constants/types";

const selectEmotion = emotion => ({
  type: types.SELECT_EMOTION,
  emotion
});

export default selectEmotion;
