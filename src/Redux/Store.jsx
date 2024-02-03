import { configureStore } from '@reduxjs/toolkit'
import CardSlices from './Slices/CardSlices'
import CategorySlice from './Slices/CategorySlice'
import searchSlice from './Slices/SearchSlice'

const store = configureStore({
  reducer: {
    cart : CardSlices ,
    category : CategorySlice ,
    search : searchSlice
  },
})

export default store


