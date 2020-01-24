import React, { useState, useEffect } from 'react';
import Search from 'antd/lib/input/Search';
import { useSpeechRecognition } from 'react-speech-kit';

export default ({ setWordHandler, setMeaningHandler }) => {

  const [searchWord, setSearchWord] = useState('');
  const [error, setError] = useState('');
  
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      setSearchWord(result);
    }
  });

  useEffect(() => {}, []);

  const onSearch = async word => {
    var app_id = '4638d8c6';
    var app_key = '4a90fb523ccbea7bb2676a9e3dc4dc41';

    const result = await fetch(
      'https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/' +
        word,
      {
        headers: {
          app_id,
          app_key
        }
      }
    );
    const data = await result.json();
    if (data.error) {
      setError(data.error);
      return;
    }
    var meaning =
      data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
    setWordHandler(word);
    setMeaningHandler(meaning);
    setError('');
    setSearchWord('');
  };
  
  return (
    <div>
      <div className="outerBlock">
        <div className="input-text">
          <Search
            size="large"
            value={searchWord}
            onChange={event => setSearchWord(event.target.value)}
            placeholder="input search text"
            onSearch={value => {
              onSearch(value);
            }}
          />
        </div>
        <button onMouseDown={listen} onMouseUp={stop} className="listen-button">
          <img
            src={require('../../assets/mic.png')}
            alt="listen"
            height="20px"
          />
        </button>
      </div>
      {listening && <div>Go ahead I'm listening</div>}
      <div style={{ color: 'red', fontWeight: 500 }}>{error}</div>
    </div>
  );
};
