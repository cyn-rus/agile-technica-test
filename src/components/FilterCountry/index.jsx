import { useState, useEffect } from 'react'
import { CountryCardContainer } from '..'

const FilterCountry = ({countriesData, isLoading}) => {
  const [countries, setCountries] = useState(countriesData)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setCountries(
      countriesData.filter(
        (country) =>
          country.name.official.toLowerCase().includes(query.toLowerCase()) ||
          country.cca2.toLowerCase().includes(query.toLowerCase())
      )
    )
  }, [query, countriesData])

  return (
    <div className='search-country'>
      <div className='country-search-bar'>
        <input
          className='country-filter-input'
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Country Name'
          />
      </div>
      {isLoading ?
        <span className='loader'>
          <span className='loader-inner'></span>
        </span> :
        <div className='country-list'>
          <CountryCardContainer countries={countries} />
        </div>
      }
    </div>
  )
}

export default FilterCountry