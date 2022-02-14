import React from 'react'

export default function Name(props) {
  return (
    <div className="Name">
      <h3>{props.name.official}</h3>
      <h4>Common name: {props.name.common}</h4>
    </div>
  )
}
