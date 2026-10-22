import logo from './logo.svg';
import './App.css';
import { Grid, Cell, Gridline } from 'react-resizable-panels';
import abacus from './assets/abacus.svg';

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

function TradingLayout() {
  return (
    <Grid
      className='tradingLayout'
      columns={[{ defaultSize: '40%', minSize: '10%' }, { minSize: '25%' }]}
      rows={[{ defaultSize: '50%', minSize: '25%' }, { minSize: '25%' }]}
    >
      <Gridline className='tradingHSeparator' type='column' column={1} />
      <Gridline className='tradingVSeparator' type='row' row={1} />
      <Cell className='tradingPanel' row={0} column={0} rowSpan={2}>CODE</Cell>
      <Cell className='tradingPanel' row={0} column={1}>MARKET VIEW</Cell>
      <Cell className='tradingPanel' row={1} column={1}>SETTINGS</Cell>
    </Grid>
  );
}

function App() {
  return (
    <div className='mainDiv'>
      {/* <TopBar /> */}
      <TradingLayout />
    </div>
  );
}

export default App;
