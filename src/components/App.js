import React, { useState, useEffect } from 'react';
import Results from './Results';
import Input from './Input';

const App = () => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  useEffect(() => {}, [word, meaning]);

  const setWordHandler = word => {
    setWord(word);
  };
  const setMeaningHandler = meaning => {
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <Input
        setWordHandler={setWordHandler}
        setMeaningHandler={setMeaningHandler}
      />
      <Results word={word} meaning={meaning} />
    </div>
  );
};

export default App;
