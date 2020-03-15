import useStats from '../utils/useStats';
import moment from 'moment';
import styled from 'styled-components';

const Stat = styled.div`
  text-align: center;
  padding: 2em 0;
  h3 {
    font-size: 3em;
    font-weight: 100;
  }
  span {
    font-size: 0.9em;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5em;
      font-weight: 100;
    }
  }
`;

export default function Stats({ url }) {
  const { stats } = useStats(url);
  if (!stats || !stats.confirmed || !stats.deaths || !stats.recovered)
    return <p>Loading...</p>;
  return (
    <>
      <Stat>
        <h3>{stats.confirmed.value}</h3>
        <span>Confirmed</span>
      </Stat>
      <Stat>
        <h3>{stats.deaths.value}</h3>
        <span>Deaths</span>
      </Stat>
      <Stat>
        <h3>{stats.recovered.value}</h3>
        <span>Recovered</span>
      </Stat>
      <p>last seen {moment(stats.lastUpdate).fromNow()}</p>
    </>
  );
}
