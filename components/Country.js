import useStats from '../utils/useStats';
import Stats from './Stats';
import { useState } from 'react';
import styled from 'styled-components';

const StatCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  padding: 2em;
  border-radius: 20px;
  background: linear-gradient(145deg, #046407, #045406);
  box-shadow: 20px 20px 60px #034f06, -20px -20px 60px #056b08;
  h2 {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  select {
    grid-column: 3;
    grid-row: 1;
  }
  div {
    grid-row: 2;
    &:nth-child(1) {
      grid-column: 1;
    }
    &:nth-child(2) {
      grid-column: 2;
    }
    &:nth-child(3) {
      grid-column: 3;
    }
  }
  label {
    position: relative;
    &:after {
      content: '▾';
      font-size: 15px;
      position: absolute;
      bottom: 18px;
    }
    select {
      border: none;
      padding: 1em;
      background: #045d07;
      box-shadow: inset 20px -20px 60px #034f06, inset -20px 20px 60px #056b08;
      color: white;
      width: 70px;
      font-size: 16px;
      color: #eaeaea;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;
      position: relative;
    }
  }
  p {
    grid-column: 1 / 4;
    font-size: 11px;
  }
`;

export default function Country() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('USA');
  if (!countries) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <StatCard>
      <h2>{selectedCountry} Stat</h2>
      <label>
        <select
          defaultValue='USA'
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
    </StatCard>
  );
}
