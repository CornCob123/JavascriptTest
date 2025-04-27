import React from 'react';
import {List } from 'react-virtualized';
import {renderRow , list} from './Virtualisation.tsx'
const rowCount = 5000;
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 700;

function virtulisation(){
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

  export default virtulisation