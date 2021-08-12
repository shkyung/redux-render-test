import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const controls = ['none', 'pen', 'pan', 'adjust', 'magnify'] as const
export type Control = typeof controls[number]

export interface ControlState {
  control: Control
  invert: boolean
  flip: boolean
}

const initState: ControlState = {
  control: 'pan',
  invert: false,
  flip: false
}

const controlSlice = createSlice({
  name: 'control',
  initialState: initState,
  reducers: {
    updateControl(state, action: PayloadAction<Control>) {
      state.control = action.payload
    },
    updateInvert(state) {
      state.invert = !state.invert
    },
    updateFlip(state) {
      state.flip = !state.flip
    }
  }
})

export const {updateControl, updateInvert, updateFlip} = controlSlice.actions
export default controlSlice.reducer