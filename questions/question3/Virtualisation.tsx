import React from 'react';
const rowCount = 5000;
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 700;
import mainLogo from '../../src/assets/vite.svg';
export const list = Array(rowCount).fill({}).map((val, idx) => {
    return {
      id: idx,
      name: 'John Doe',
      image: 'http://via.placeholder.com/40',
      text: "something"
    }
  });
export function renderRow({index, key, style}) {
  
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={mainLogo} />
        </div>
        <div className="content">
          <div>{list[index]?.name ?? ""}</div>
          <div>{list[index]?.text ?? ""}</div>
        </div>
      </div>
    );
  }