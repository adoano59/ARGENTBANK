import { configureStore } from '@reduxjs/toolkit'
import userReducer from './store/user'; // Importation du réducteur par défaut

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})