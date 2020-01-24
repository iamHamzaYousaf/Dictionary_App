import React from 'react';

export default ({ word, meaning }) => {
  return (
    <div className="outerBlock">
      <div className="result-block">
        <div className="looking-for-block">
          <div className="lf-title">Word you're looking for:</div>
          <div className="lf-word">{word ? word : '...search something'}</div>
        </div>
        <div>
          <div className="lf-meaning">
            {meaning ? meaning : '...search something'}
          </div>
        </div>
      </div>
    </div>
  );
};
