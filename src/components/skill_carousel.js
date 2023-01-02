import React from 'react';
import { Carousel } from 'react-carousel3';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
const style = {
  width: 297,
  height: 296,
};

export const skc= () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #16235e 0%, #020223 100%)',
    }}
  >
    <Carousel height={460} width={980} yOrigin={42} yRadius={48} autoPlay={true}>
      <div key={1} style={style}>
        <img alt="" src="../assets/img/meter1.svg" />
      </div>
      <div key={2} style={style}>
        <img alt="" src="../assets/img/meter2.svg" />
      </div>
      <div key={3} style={style}>
        <img alt="" src="../assets/img/meter3.svg" />
      </div>
      
    </Carousel>
  </div>
);