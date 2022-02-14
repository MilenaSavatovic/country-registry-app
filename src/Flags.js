import React from 'react'

export default function Flags(props) {
  return (
    <div className="Flags">
      <h6>Flag:</h6>
      <img src={props.flags.flags.png} alt="flagImg" className="img-fluid" />
      <h6>Coat of arms:</h6>
      <img
        src={props.flags.coatOfArms.png}
        alt="coatOfArms"
        className="img-fluid"
      />
    </div>
  )
}
