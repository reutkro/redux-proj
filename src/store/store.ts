import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from "./slice"
const store = configureStore({
    reducer: {
        list: todoReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store
