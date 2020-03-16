import useStats from '../utils/useStats';
import Stats from './Stats';
import { useState } from 'react';
import styled from 'styled-components';

const StatCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5em;
  padding: 1em 2em;
  border-radius: 20px;
  background: #307e57;
  box-shadow: 20px 20px 60px #296b4a, -20px -20px 60px #379164;
  h2 {
    grid-column: 1 / 3;
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
      left: 90px;
    }
    select {
      grid-column: 3;
      grid-row: 1;
      border: none;
      padding: 1em;
      background: #307e57;
      box-shadow: inset 20px 20px 60px #296b4a, inset -20px -20px 60px #379164;
      color: white;
      width: 120px;
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
  @media (max-width: 768px) {
    padding: 1em;
    grid-gap: 0.3em;
    align-items: center;
    justify-self: center;
    h2 {
      font-size: 0.9em;
    }
    label {
      select {
        font-size: 0.9em;
      }
    }
    div {
      grid-row: 2;
      &:nth-child(3) {
        grid-column: 1 / 2;
      }
    }
    div + div {
      grid-row: 2;
      grid-column: 2 / 3;
    }
    div + div + div {
      grid-row: 2;
      grid-column: 3 / 4;
    }
  }
`;

export default function Country() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('IN');
  if (!countries) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <StatCard>
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
    </StatCard>
  );
}
