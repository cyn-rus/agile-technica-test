import { useState } from 'react'

const CountryCard = ({countryName, countryCode, geographical, flag}) => {
  const [isClicked, setIsClicked] = useState(false)

  function showGeographical(num) {
    if (Number.isInteger(num)) {
      return num
    }
    return num.toFixed(2)
  }

  return (
    <div className={`country-card ${isClicked ? 'clicked' : ''}`} onClick={() => setIsClicked(true)}>
      <div className="country-name">
        <h2>{countryName}</h2>
        <h3>{countryCode}</h3>
      </div>
      <div className="country-flag">
        <img src={flag} alt={countryName} />
      </div>
      <div className="country-geographical">
        <h4>Latitude: {showGeographical(geographical[0])}</h4>
        <h4>Longitude: {showGeographical(geographical[1])}</h4>
      </div>
    </div>
  )
}

export default CountryCard