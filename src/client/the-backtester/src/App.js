import './App.css';
import './CodePanel.css';
import './SettingsPanel.css';
import { Grid, Cell, Gridline } from 'react-resizable-panels';
import abacus from './assets/abacus.svg';
import CodePanel from './CodePanel.js';
import SettingsPanel from './SettingsPanel.js';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { python } from '@codemirror/lang-python';
import { tags as t } from '@lezer/highlight';
import { useCallback, useState, useRef } from 'react';
import React from 'react';

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

function TradingPanel({ title, row, column, rowSpan=1, children }) {
  return (
    <Cell className='tradingPanel' row={row} column={column} rowSpan={rowSpan}>
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
      <Gridline className='tradingHSeparator' type='column' column={1} />
      <Gridline className='tradingVSeparator' type='row' row={1} />
      <TradingPanel title="CODE" row={0} column={0} rowSpan={2}>
        <CodePanel/>
      </TradingPanel>
      <TradingPanel title="MARKET VIEW" row={0} column={1}/>
      <TradingPanel title="BACKTEST SETTINGS" row={1} column={1}>
        <SettingsPanel />
      </TradingPanel>
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
