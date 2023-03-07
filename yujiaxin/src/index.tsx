import React from 'react';
import ReactDOM from 'react-dom/client';
import CouponBanner from './CouponBanner';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const data={
  dataHour:22,
  dataMinute:2,
  dataSecond:2,
}
root.render(
  <React.StrictMode>
    <CouponBanner dataProps={data}/>
  </React.StrictMode>
);

