import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CurrentGameState {
  currentGameId: number | null;
}

const initialState:CurrentGameState = {
  currentGameId: null,
}

export const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState, 
  reducers: {
    setCurrentGameId(state, action: PayloadAction<number>) {
      state.currentGameId = action.payload;
    }
  }
})

export default currentGameSlice.reducer;