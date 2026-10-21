import logo from './logo.svg';
import './App.css';
import { Grid, Cell, Gridline } from 'react-resizable-panels';

function TopBar() {
  return (
    <div className="topBar">
      <h1>The Backtester</h1>
    </div>
  );
}

function TradingLayout() {
  return (
    <Grid
      className="tradingLayout"
      columns={[{ defaultSize: "25%", minSize: "10%" }, { minSize: "25%" }]}
      rows={[{ defaultSize: "25%", minSize: "25%" }, { minSize: "25%" }]}
    >
      <Cell className="tradingPanel" row={0} column={0} rowSpan={2}>CODE</Cell>
      <Cell className="tradingPanel" row={0} column={1}>MARKET VIEW</Cell>
      <Cell className="tradingPanel" row={1} column={1}>SETTINGS</Cell>
      <Gridline type="column" column={1} />
    </Grid>
  );
}

function App() {
  return (
    <div className='mainDiv'>
      <TopBar />
      <TradingLayout />
    </div>
  );
}

export default App;
