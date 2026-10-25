
import candles from './assets/candles.svg';
import indicator from './assets/indicator.svg';
import settings from './assets/settings.svg';
import { useState } from 'react';
import Chart from './Chart.js';
var factice_json = require('./assets/ohlc.json');

function IconButton({ src }) {
  return (
    <button className="iconButton">
      <img className='iconImg' src={src} role="img" alt="" />
    </button>
  )
}

function TxtButton({ label, selected, onClick }) {
  return (
    <button className={`txtButton ${selected ? "selected" : ""}`} onClick={onClick}>
      <p className="buttonTxt">{label}</p>
    </button>
  )
}

function MarketButtons() {
  return (
    <div className="marketButtons">
      {/* <IconButton src={candles} />
      <IconButton src={indicator} />
      <IconButton src={settings} /> */}
    </div>
  );
}

function MarketSymbol({value, fullname}) {
  return (
    <div className="marketSymbol">
      <p className="msValueP">{value}</p>
      <p className="msFullnameP">{fullname}</p>
    </div>
  );
}

function MarketTopBar() {
  return (
    <div className='marketTopBar'>
      <MarketSymbol value='GOOG' fullname='Alphabet Inc.' />
      <MarketButtons />
    </div>
  )
}

function IntervalMarketOption({interval, setInterval}) {
  return (
    <div className="marketIButtons">
      <TxtButton label="1D" selected={interval == "1D"} onClick={() => {setInterval("1D")}} />
      <TxtButton label="5D" selected={interval == "5D"} onClick={() => {setInterval("5D")}} />
      <TxtButton label="1M" selected={interval == "1M"} onClick={() => {setInterval("1M")}} />
      <TxtButton label="6M" selected={interval == "6M"} onClick={() => {setInterval("6M")}} />
      <TxtButton label="YTD" selected={interval == "YTD"} onClick={() => {setInterval("YTD")}} />
      <TxtButton label="1Y" selected={interval == "1Y"} onClick={() => {setInterval("1Y")}} />
      <TxtButton label="5Y" selected={interval == "5Y"} onClick={() => {setInterval("5Y")}} />
      <TxtButton label="ALL" selected={interval == "ALL"} onClick={() => {setInterval("ALL")}} />
    </div>
  );
}

function MarketBottomBar({interval, setInterval}) {
  return (
    <div className='marketBottomBar'>
      <IntervalMarketOption interval={interval} setInterval={setInterval} />
      {/* <p className='marketBottomBarOption'>Ln 6, Col 7</p> */}
    </div>
  )
}

function ChartDiv() {
  return (
    <div className="chartDiv">
      <Chart json={factice_json} interval={86400000} span={60} />
    </div>
  )
}

export default function MarketPanel() {
  const [interv, setInterv] = useState("1D");

  return (
    <div className="marketPanelDiv">
      <MarketTopBar />
      <ChartDiv />
      <MarketBottomBar interval={interv} setInterval={setInterv} />
    </div>
  );
}