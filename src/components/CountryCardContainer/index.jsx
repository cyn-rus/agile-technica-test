import { CountryCard } from '..'

const CountryCardContainer = ({countries}) => {
  return (
    <div className="country-card-container">
      {countries.map((country, i) => 
        <CountryCard
          key={i}
          countryName={country.name.official}
          countryCode={country.cca2}
          geographical={country.latlng}
          flag={country.flags.svg}
        />
      )}
    </div>
  )
}

export default CountryCardContainer