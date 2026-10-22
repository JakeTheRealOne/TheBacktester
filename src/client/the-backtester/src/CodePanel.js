// Source: https://github.com/uiwjs/react-codemirror

import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { python } from '@codemirror/lang-python';
import { tags as t } from '@lezer/highlight';
import { useCallback, useState, useRef } from 'react';


const defaultTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#030303',
    backgroundImage: '',
    foreground: '#D7D7D7',
    caret: '#D7D7D7',
    selection: '#036cd636',
    selectionMatch: '#036cd636',
    lineHighlight: '#8a91991a',
    gutterBackground: '#030303',
    gutterForeground: '#8a919966',
  },
  styles: [
    { tag: t.comment, color: '#636363' },
    { tag: t.variableName, color: '#C6C6C6' },
    { tag: [t.string, t.special(t.brace)], color: '#C5C5C5' },
    { tag: t.number, color: '#C5C5C5' },
    { tag: t.bool, color: '#C5C5C5' },
    { tag: t.null, color: '#C5C5C5' },
    { tag: t.keyword, color: '#6d6d6d' },
    { tag: t.operator, color: '#D8D8D8' },
    { tag: t.className, color: '#C4C4C4' },
    { tag: t.definition(t.typeName), color: '#C4C4C4' },
    { tag: t.typeName, color: '#C4C4C4' },
    { tag: t.angleBracket, color: '#C4C4C4' },
    { tag: t.tagName, color: '#C4C4C4' },
    { tag: t.attributeName, color: '#C4C4C4' },
  ],
});
const extensions = [python({ jsx: true })];

const templateBacktestingPy = `from backtesting import Strategy

class MyStrategy(Strategy):
    def init(self):
        # todo

    def next(self):
        # todo
`;

export default function CodePanel() {
  const [value, setValue] = useState(templateBacktestingPy);
  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      theme={defaultTheme}
      extensions={extensions}
      className="codePanel"
      onChange={onChange}
      autoFocus={true}
      basicSetup={{
        foldGutter: false,
        tabSize: 4
      }}
      minWidth="0px"
      height="100%"
    />
  );
}
