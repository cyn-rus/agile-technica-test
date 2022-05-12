import { useState, useEffect } from 'react'
import axios from 'axios'
import { FilterCountry } from '../../components'

const Homepage = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(function (res) {
        setCountries(res.data)
        setIsLoading(false)
      })
  }, [])

  console.log(countries)
  return (
    <div className="home-page">
      <div className="page-title">
        <h1>Countries</h1>
      </div>
      <FilterCountry countriesData={countries} isLoading={isLoading} />
    </div>
  )
}

export default Homepage