import React from 'react'

export default function CountrRegistry() {
  return (
    <div className="CountryRegistry">
      <form>
        <input type="search" placeholder="Type country" />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
    </div>
  )
}
