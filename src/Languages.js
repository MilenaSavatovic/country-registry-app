import React from 'react'

export default function Languages(props) {
  let languageValue = Object.values(props.languages)
  return (
    <div className="Languages">
      <h6>Language: {languageValue[0]}</h6>
    </div>
  )
}
