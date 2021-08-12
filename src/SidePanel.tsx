import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from "./store";
import {updateControl, updateInvert, updateFlip} from './controlSlice'

const style = {
  height: '500px',
}

export default function SidePanel() {
  const { control, invert, flip } = useSelector((state: RootState) => state.control)
  const dispatch = useDispatch()
  console.error('------- SidePanel rendering')
  return (
    <div style={style}>
      <span>control : {control}</span>
      <br />
      <span>invert : {invert.toString()}</span>
      <br />
      <span>flip : {flip.toString()}</span>
      <br />
      <br />
      <button onClick={() => dispatch(updateControl('pan'))}>control-pan</button>
      <button onClick={() => dispatch(updateControl('adjust'))}>control-adjust</button>
      <button onClick={() => dispatch(updateInvert())}>invert</button>
      <button onClick={() => dispatch(updateFlip())}>flip</button>
      {/*<button onClick={() => setState(!appState)}>set App's state</button>*/}
    </div>
  )
}
