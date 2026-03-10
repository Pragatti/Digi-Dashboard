import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CardId = 'lights' | 'water' | 'carbon' | 'energy' | 'footfall';

type DashboardState = {
  activeCards: CardId[];
};

const initialState: DashboardState = {
  activeCards: ['lights', 'water', 'carbon', 'energy', 'footfall'],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleCard(state, action: PayloadAction<CardId>) {
      const id = action.payload;
      if (state.activeCards.includes(id)) {
        state.activeCards = state.activeCards.filter((cardId) => cardId !== id);
      } else {
        state.activeCards.push(id);
      }
    },
    setActiveCards(state, action: PayloadAction<CardId[]>) {
      state.activeCards = action.payload;
    },
  },
});

export const { toggleCard, setActiveCards } = dashboardSlice.actions;

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

