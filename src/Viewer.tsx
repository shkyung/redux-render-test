import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from "./store";
import {updateControl} from './controlSlice'

const style = {
  height: '500px',
}

export default function Viewer() {
  const dispatch = useDispatch()
  dispatch(updateControl('pan'))
  console.error('-----Viewer Rendering!!')
  return (
    <div style={style}>
      <span>Viewer</span>
      {/*<span>control : {control}</span>*/}
      {/*<br />*/}
      {/*<span>invert : {invert.toString()}</span>*/}
      {/*<br />*/}
      {/*<span>flip : {flip.toString()}</span>*/}
      {/*<br />*/}
    </div>
  )
}
