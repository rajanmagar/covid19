import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
`;

const StatBlock = styled.div`
  font-size: 0.8rem;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (!stats) return <p>Loading...</p>;
  return (
    <StatGrid>
      <h1>
        World <br />
        Wide Stat
      </h1>
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
