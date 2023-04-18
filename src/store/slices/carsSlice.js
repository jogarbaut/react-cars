import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    searchTerm: ''
  },
  reducers: {
    addCar(state, action) {
      // Assumption
      // action.payload === { name: 'carName', cost: 'carCost'}
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost
      })
    },
    removeCar(state, action) {
      // Assumption
      // action.payload === id of car
      const updatedCars = state.data.filter((car) => {
        return car.id !== action.payload
      })
      state.data = updatedCars
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
  }
})

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions
export const carsReducer = carsSlice.reducer