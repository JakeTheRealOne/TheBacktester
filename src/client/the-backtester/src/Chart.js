import { useEffect, useState } from "react";

function ChartCandle({ candle, maxPrice, minPrice, onceEvery7, onHover }) {
  let vPos = ((maxPrice - Math.max(candle.content.close, candle.content.open)) / (maxPrice - minPrice)) * 100;
  let vSize = (Math.abs(candle.content.close - candle.content.open) / (maxPrice - minPrice)) * 100;
  let color = candle.content.close > candle.content.open ? true : false;

  let hPos = ((maxPrice - candle.content.high) / (maxPrice - minPrice)) * 100;
  let hSize = (Math.abs(candle.content.high - Math.max(candle.content.close, candle.content.open)) / (maxPrice - minPrice)) * 100;
  let lPos = ((maxPrice - Math.min(candle.content.close, candle.content.open)) / (maxPrice - minPrice)) * 100;
  let lSize = (Math.abs(candle.content.low - Math.min(candle.content.close, candle.content.open)) / (maxPrice - minPrice)) * 100;

  return (
    <div className="chartCandleDiv" style={{}} onMouseEnter={onHover}>
      {onceEvery7 == 0 && <div className="chartCandleStickHard"></div>}
      <div className="chartCandleStick"></div>
      <div className={`chartCandle ` + (color ? "greenCandle" : "redCandle")} style={{ top: vPos.toString() + "%", height: vSize.toString() + "%" }}></div>
      <div className={`chartCandleCaret ` + (color ? "greenCandle" : "redCandle")} style={{ top: hPos.toString() + "%", height: hSize.toString() + "%" }}></div>
      <div className={`chartCandleCaret ` + (color ? "greenCandle" : "redCandle")} style={{ top: lPos.toString() + "%", height: lSize.toString() + "%" }}></div>
      {/* {new Date(candle.timestamp).toString()} */}
    </div>
  )
}

function CurrentCandleTable({ candle }) {
  return (
    <div>
      {candle &&
        <table className="currentCandleTable">
          {/* <p>{new Date(candle.timestamp).toString()}</p> */}
          <tr>
            <td>open</td><td>{candle.content.open.toFixed(2)}</td>
          </tr>
          <tr>
            <td>high</td><td>{candle.content.high.toFixed(2)}</td>
          </tr>
          <tr>
            <td>low</td><td>{candle.content.low.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="td">close</td><td>{candle.content.close.toFixed(2)}</td>
          </tr>

        </table>
      }
    </div>

  )
}

export default function Chart({ json, interval }) {
  const [rawData, setRawData] = useState(json);
  const [data, setData] = useState([]);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [currentCandle, setCurrentCandle] = useState(null);

  useEffect(() => {
    // raw data changed, recompute latest
    let latest = null;
    let earliest = null;
    let max = null;
    let min = null;
    for (const [key, value] of Object.entries(rawData)) {
      let current = Date.parse(key);
      if (latest == null || current > latest) {
        latest = current;
      }
      if (earliest == null || current < earliest) {
        earliest = current;
      }
      if (max == null || value.high > max) { // todo change from close to high
        max = value.high;
      }
      if (min == null || value.low < min) { // todo change from close to high
        min = value.low;
      }
    }
    const nbCandles = (latest - earliest) / interval + 1;
    let newData = new Array(nbCandles);
    for (const [key, value] of Object.entries(rawData)) {
      let current = Date.parse(key);
      const idx = Math.round((current - earliest) / interval);
      newData[idx] = {
        timestamp: current,
        content: value
      };
    }
    setData(newData);
    // setCurrentCandle(newData[0]);
    setMaxPrice(max);
    setMinPrice(min);
  }, [rawData]);

  return (
    <div className="chart" onMouseLeave={() => [setCurrentCandle(null)]}>
      <CurrentCandleTable candle={currentCandle} />
      {data.map((c, i) => <ChartCandle candle={c} maxPrice={maxPrice} minPrice={minPrice} onceEvery7={i % 7} onHover={() => {
        setCurrentCandle(c)
      }} />)}
    </div>
  );
}