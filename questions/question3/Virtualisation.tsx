import React from 'react';
import {List } from 'react-virtualized';
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


export function virtulisation(){
  return(
    <>
        <h2>Question 3.2</h2>
        <div className="App">
          <div className="list">
            <List
              width={rowWidth}
              height={listHeight}
              rowHeight={rowHeight}
              rowRenderer={renderRow}
              rowCount={list.length}
              overscanRowCount={3} />
          </div>
        </div>
    </>
  )
}