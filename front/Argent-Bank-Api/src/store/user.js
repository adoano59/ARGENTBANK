import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: (() => {
      const storedUser = localStorage.getItem('user');
      try {
        return storedUser ? JSON.parse(storedUser) : null;
      } catch (error) {
        return null;
      }
    })(),
  }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user= action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
        state.user = null
        localStorage.removeItem('user')
    }
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer