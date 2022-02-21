import React from 'react'

export default function Currency(props) {
  let currencyValues = Object.values(props.currency)
  return (
    <div className="Currency">
      <h6>Currency: {currencyValues[0].name}</h6>
      <h6>Currency symbol: {currencyValues[0].symbol}</h6>
    </div>
  )
}
