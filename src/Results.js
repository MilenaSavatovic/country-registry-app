import React from 'react'
import Flags from './Flags'
import Name from './Name'
import Continent from './Continent'
import Currency from './Currency'
import Languages from './Languages'

export default function Results(props) {
  console.log(props.results)
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <Name name={props.results.name} />
        </section>
        <section>
          <Flags flags={props.results} />
        </section>
        <section>
          <h6>Capital city</h6>
          <div>{props.results.capital[0]}</div>
        </section>
        <section>
          <div>
            {props.results.continents.map(function (continent, index) {
              return (
                <div key={index}>
                  <Continent continent={continent} />
                </div>
              )
            })}
          </div>
          <div>
            Look up on
            <a
              href={props.results.maps.googleMaps}
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              GoogleMaps
            </a>
          </div>
        </section>
        <section>
          <Languages languages={props.results.languages} />
        </section>
        <section>
          <Currency currency={props.results.currencies} />
        </section>
      </div>
    )
  } else {
    return null
  }
}
