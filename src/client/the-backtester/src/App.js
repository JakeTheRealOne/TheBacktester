import './App.css';
import './CodePanel.css';
import './SettingsPanel.css';
import './MarketPanel.css';
import { Grid, Cell, Gridline } from 'react-resizable-panels';
import abacus from './assets/abacus.svg';
import CodePanel from './CodePanel.js';
import SettingsPanel from './SettingsPanel.js';
import MarketPanel from './MarketPanel.js';

function TBLogo() {
  return (
    <div className='tbLogo'>
      <img className='logoImg' src={abacus} role="img" alt="" />
    </div>
  )
}

function TBSeparator() {
  return (
    <div className='tbSeparator'>
    </div>
  )
}

function TBProjectName({ name }) {
  return (
    <p className='tbProjectName'>
      {name}
    </p>
  )
}

function TBActionBar() {
  return (
    <div className='tbActionBar'>
      <TBABRunButton />
      <TBABBacktestBytton />
    </div>
  )
}

function TBABRunButton() {
  return (
    <button className='tbabRunButton'>
      Run
    </button>
  )
}

function TBABBacktestBytton() {
  return (
    <button className='tbabBacktestButton'>
      Backtest
    </button>
  )
}

function TBProfileButton() {
  return (
    <button className='tbProfileButton'>
      Profile
    </button>
  )
}

function TopBar() {
  return (
    <div className='topBar'>
      <div className='topBarLeft'>
        <TBLogo />
        <TBSeparator />
        <TBProjectName name={"MACD Strategy"} />
      </div>
      <TBActionBar />
      <div className='topBarRight'>
        <TBProfileButton />
      </div>
    </div>
  );
}

function TradingPanel({ title, row, column, rowSpan = 1, colSpan = 1, children }) {
  return (
    <Cell className='tradingPanel' row={row} column={column} rowSpan={rowSpan} columnSpan={colSpan}>
      <div className='panelTitle'>
        <p className='panelTitleOption selected'>{title}</p>
      </div>
      {children}
    </Cell>
  )
}

function TradingLayout() {
  return (
    <Grid
      className='tradingLayout'
      columns={[{ defaultSize: '40%', minSize: '10%' }, { minSize: '25%' }]}
      rows={[{ defaultSize: '65%', minSize: '25%' }, { minSize: '25%' }]}
    >
      <Gridline className='tradingVSeparator' type='column' column={1} />
      {/* <Gridline className='tradingVSeparator' type='column' column={2} /> */}
      <Gridline className='tradingHSeparator' type='row' row={1} column={1} columnSpan={2} />
      <TradingPanel title="CODE" row={0} column={0} rowSpan={2}>
        <CodePanel />
      </TradingPanel>
      <TradingPanel title="CHART" row={0} column={1} colSpan={2}>
        <MarketPanel />
      </TradingPanel>
      <TradingPanel title="BACKTEST SETTINGS" row={1} column={1}>
        <SettingsPanel />
      </TradingPanel>
      {/* <TradingPanel title="RESULTS" row={1} column={2}>
        <SettingsPanel />
      </TradingPanel> */}
    </Grid>
  );
}

export default function App() {
  return (
    <div className='mainDiv'>
      {/* <TopBar /> */}
      <TradingLayout />
    </div>
  );
}
