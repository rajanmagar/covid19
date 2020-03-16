import useStats from '../utils/useStats';
import Stats from './Stats';
import { useState } from 'react';
import styled from 'styled-components';

export default function Country() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('IN');
  if (!countries) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className='countrystat'>
      <h2>{selectedCountry} Stat</h2>
      <label>
        <select
          defaultValue='IND'
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {Object.entries(countries.countries).map(([country, code]) => (
            <option key={code} value={countries.iso3[code]}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
