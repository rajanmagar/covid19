import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2em 0;
    align-items: center;
    background: #eaeaea;
    border-radius: 21px;
    color: #333;
    margin-top: 1em;
  }
`;

const StatBlock = styled.div`
  padding: 0.5em;
  font-size: 0.8rem;
`;

export default function Stats({ url }) {
  const { stats } = useStats(url);
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
