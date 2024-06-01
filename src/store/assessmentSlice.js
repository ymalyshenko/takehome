import { createSlice } from '@reduxjs/toolkit';

export const assessmentSlice = createSlice({
  name: 'assessment',
  initialState: {
    value: {},
  },
  reducers: {
    writeAnswer: (state, action) => {
      const {
        payload: { questionId, question, answer },
      } = action;

      state.value[questionId] = { question, answer };
    },
  },
});

export const { writeAnswer } = assessmentSlice.actions;

export default assessmentSlice.reducer;
