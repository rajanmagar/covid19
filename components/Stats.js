import useStats from '../utils/useStats';
import moment from 'moment';
import styled from 'styled-components';

export default function Stats({ url }) {
  const { stats } = useStats(url);
  if (!stats || !stats.confirmed || !stats.deaths || !stats.recovered)
    return <p>Loading...</p>;
  return (
    <>
      <div className='stat-value'>
        <h3>{stats.confirmed.value}</h3>
        <span>Confirmed</span>
      </div>
      <div className='stat-value'>
        <h3>{stats.deaths.value}</h3>
        <span>Deaths</span>
      </div>
      <div className='stat-value'>
        <h3>{stats.recovered.value}</h3>
        <span>Recovered</span>
      </div>
      <p>last updated {moment(stats.lastUpdate).fromNow()}</p>
    </>
  );
}
