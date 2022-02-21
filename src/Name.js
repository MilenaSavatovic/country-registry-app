import React from 'react'

export default function Name(props) {
  let officialName = Object.values(props.name.nativeName)
  return (
    <div className="Name">
      <h3>{props.name.official}</h3>
      <h4>Common name: {props.name.common}</h4>
      <h4>Native name: {officialName[0].official}</h4>
    </div>
  )
}
