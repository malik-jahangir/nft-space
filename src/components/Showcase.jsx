
import rightArrowWhite from "../assets/img/right-arrow-white.svg";
import rightArrow from "../assets/img/right-arrow.svg";
import React, { useState } from 'react'
const Showcase = () => {
    const [remainingH, setRemainingH] = useState('0');
    const [remainingMin, setRemainingMin] = useState('0');
    const [remainingSec, setRemainingSec] = useState('0');
    const allMonths = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    const current = new Date();
    const month = allMonths[current.getMonth()];
    const day = current.getDay();
    const year = current.getFullYear();
    const tmeZone = current.toString().match(/([A-Z]+[\+-][0-9]+)/)[1].replace("0","").slice(0, -2);
    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
      let counter = new Date("Jan 12, 2023 24:00:00").getTime();

let interval = setInterval(function() {


    let now = new Date().getTime();
  
    let distance = counter - now;
    if (distance < 0) {
        clearInterval(interval);
        remainingH = 0;
        remainingMin= 0;
        remainingSec= 0;
      }
      else{
          let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let sec = Math.floor((distance % (1000 * 60)) / 1000);
   setRemainingH(hour)
   setRemainingMin(min)
   setRemainingSec(sec)
      }


  }, 1000);
  return (
    <section className="showcase">
      <main>
        <h1 className="large">
          Discover,
          <br />
          Collect, and sell
          <br />
          extraodinary <span>NFTS</span>
        </h1>
        <h1 className="small">
          Discover,
          Collect, and sell
          extraodinary <span>NFTS</span>
        </h1>
        <p>
          Get started with the worlds easiest and most secure platform for
          selling, purchasing, and collecting non-fungible token.
        </p>
        <div className="hero-action-btns">
          <ul>
            <li>
              <a className="btn explore-art" href="https://www.google.com/" target='blank'>
                Explore Art
              </a>
            </li>
            <li>
              <a className="learn-more" href="">
                <p>Learn More</p>
                <img src={rightArrow} alt="Right Arrow" />
              </a>
            </li>
          </ul>
        </div>
      </main>
      <div className="hero-img-container">
        <div className="glass-box">
          <h2>BirdyPing #4453</h2>
          <div className="auction-detail">
            <div className="top">
              <div className="detail end">
                <p className="small">Auction ends in</p>
                <p>{`${remainingH}h ${remainingMin}m ${remainingSec}s`}</p>
              </div>
              <div className="detail time">
                <p className="small">{`${month} ${day}, ${year} at ${time} ${tmeZone}`}</p>
              </div>
            </div>
            <div className="bottom">
              <div className="detail highest-bid">
                <p className="small">Highest Bid</p>
                <p>0.476 ETH</p>
              </div>
              <div className="detail place-bid">
                <p>Place a bid</p>
                <img src={rightArrowWhite} alt="Right Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
