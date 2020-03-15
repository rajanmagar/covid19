import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-rows: repeat(4, 50px);
    justify-self: center;
    div {
      width: 100%;
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    div + div {
      grid-row: 3 / 4;
    }
    div + div + div {
      grid-row: 4 / 5;
    }
  }
`;

const StatBlock = styled.div`
  font-size: 0.8rem;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (!stats) return <p>Loading...</p>;
  return (
    <StatGrid>
      <h1>Global Stat</h1>
      <StatBlock>
        <span>
          ⚪ <b>{stats.confirmed.value}</b> confirmed cases
        </span>
      </StatBlock>
      <StatBlock>
        <span>
          🔴 <b>{stats.deaths.value}</b> death cases
        </span>
      </StatBlock>
      <StatBlock>
        <span>
          🔵 <b>{stats.recovered.value}</b> recover cases
        </span>
      </StatBlock>
    </StatGrid>
  );
}
