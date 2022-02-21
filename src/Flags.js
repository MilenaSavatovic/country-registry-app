import React from 'react'
import './Flags.css'

export default function Flags(props) {
  return (
    <div className="Flags">
      <h6>Flag:</h6>
      <img src={props.flags.flags.png} alt="flagImg" />
      <h6>Coat of arms:</h6>
      <img src={props.flags.coatOfArms.png} alt="coatOfArms" />
    </div>
  )
}
