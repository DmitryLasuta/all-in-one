import { cartReducer } from '@/lib/services/redux/features'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
