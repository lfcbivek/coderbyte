import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}


function Tile(props) {
  
  return (
    <button style={style.letter} onClick={props.onClick}>{ props.letter }</button>
  );
}

function Application(props) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [outputStr, setOutputStr] = useState('');


  const handleClick = (l) => {
    if (outputStr.endsWith(l + l)) {
      const newString = outputStr.slice(0, -2) + '_';
      setOutputStr(newString);
    } else {
      setOutputStr(outputStr+l);
    }
  }
  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
      { letters.split('').map((l) => {
        return(
          <Tile letter={l} key={l} onClick={() => handleClick(l)}/>
        )
        })
      }
      </aside>
      <div id="outputString">{outputStr}</div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);