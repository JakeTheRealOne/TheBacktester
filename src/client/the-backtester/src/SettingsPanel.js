// Source: https://github.com/uiwjs/react-codemirror

import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { python } from '@codemirror/lang-python';
import { tags as t } from '@lezer/highlight';
import { useCallback, useState, useRef } from 'react';
import './CodePanel.css';


function SymbolInput({ value }) {
  return (
    <div className="symbolInput setTextDiv">
      <div className="setTextLabelDiv">
        <p>Symbol</p>
        {/* <span>?</span> */}
      </div>
      <input className="setTextInput" name="symbol" value={value} />
    </div>
  );
}

function CashInput({ value }) {
  return (
    <div className="cashInput setTextDiv">
      <div className="setTextLabelDiv">
        <p>Cash</p>
        {/* <span>?</span> */}
      </div>
      <input className="setTextInput" name="cash" value={value} />
    </div>
  );
}

function CommissionInput({ value }) {
  return (
    <div className="commissionInput setTextDiv">
      <div className="setTextLabelDiv">
        <p>Commission</p>
        {/* <span>?</span> */}
      </div>
      <input className="setTextInput" name="commission" value={value} />
    </div>
  );
}

function BoolInput({ label }) {
  return (
    <div className="setBoolInput">
      <label class="sbiSwitch">
        <input type="checkbox" />
        <span class="sbiSlider"></span>
      </label>

      <span className="sbiLabel"></span>
      {label}
    </div>
  )
}

function IntervalInput({ value }) {
  return (
    <div className="intervalInput setTextDiv">
      <div className="setTextLabelDiv">
        <p>Interval</p>
        <div style={{ minWidth: "4px" }}></div>
        {/* <span>?</span> */}
      </div>
      <select name="interval" className="setSelectInput">
        <option className="selectOption" value="1d">1d</option>
        <option className="selectOption" value="1wk">1wk</option>
        <option className="selectOption" value="1h">1h</option>
        <option className="selectOption" value="4h">4h</option>
        <option className="selectOption" value="15m">15m</option>
      </select>
    </div>
  )
}

function DateInput({ value, label }) {
  return (
    <div className="dateInput setTextDiv">
      <div className="setTextLabelDiv">
        <p>{label}</p>
      </div>
      <input type="date" name={`date-${label}`} value={value} className="setDateInput"></input>
    </div>
  )
}

function SpreadInput({ value }) {
  return (
    <div className="spreadInput setTextDiv">
      <div className="setTextLabelDiv">
        <p>Spread</p>
        {/* <span>?</span> */}
      </div>
      <input className="setTextInput" name="spread" value={value} />
    </div>
  );
}

function HedgingInput({ value }) {
  return (
    <div className="hedgingInput setTextDiv">
      <div className="setTextLabelDiv">
        <p>Hedging</p>
        {/* <span>?</span> */}
      </div>
      <input className="setTextInput" name="hedging" value={value} />
    </div>
  );
}

function MarginInput({ value }) {
  return (
    <div className="marginInput setTextDiv">
      <div className="setTextLabelDiv">
        <p>Margin</p>
        {/* <span>?</span> */}
      </div>
      <input className="setTextInput" name="margin" value={value} />
    </div>
  );
}


export default function SettingsPanel() {
  return (
    <div className="settingsPanel">
      <div className="settingsPanel1">
        <div className="settingsPanel11">
          <SymbolInput value={"GOOG"} />
          <IntervalInput />
        </div>
        <div className="settingsPanel12">
          <DateInput value={"2023-01-01"} label="From" />
          <DateInput value={"2026-01-01"} label="To" />
        </div>
        <CashInput value={"10000.0"} />
        <BoolInput label={"Exclusive orders"} />
        <BoolInput label={"Finalize trades"} />
      </div>
      <div className="settingsPanelSeparator"></div>
      <div className="settingsPanel1">
        <CommissionInput value={".002"} />
        <SpreadInput value={"0.0"} />
        <MarginInput value={"1.0"} />
        <BoolInput label={"Trade on close"} />
        <BoolInput label={"Hedging"} />
      </div>
    </div>

  );
}
