// countdown
import React, { useMemo } from 'react';
import useCountdown from './useCountdown';
import moment from 'moment';
import './CouponBanner.css'
interface Iprops {
  dataHour: number;
  dataMinute: number;
  dataSecond: number;
}
const CouponBanner = (props: any) => {
  const { dataHour, dataMinute, dataSecond }: Iprops = props.dataProps
  const deadline = useMemo(
    () =>
      moment()
        .add(dataSecond, 's')
        .add(dataMinute, 'm')
        .add(dataHour, 'h')
        .format('YYYY-MM-DD HH:mm:ss'),
    [],
  );
  const { hour, minute, second } = useCountdown({
    // deadline: '2021-04-22 17:49:00',
    deadline,
  });

  return <div className='banner'>
    {/* <img src={require("./pic1.png")} alt=""/> */}
    <div className='time'>
      <span>{hour}</span>h<span>{minute}</span>m<span>{second}</span>s
    </div>
  </div>;
};

export default CouponBanner;