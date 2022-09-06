import { React, useState } from 'react'
import TextField from '@mui/material/TextField'
import List from '../components/List'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Search.module.css'

export default function Search() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

  return (
    <div className="main">
    <Navbar/>
      <div className={styles.search}>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}
