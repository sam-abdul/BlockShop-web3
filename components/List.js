import { React, useState } from "react";
import { playlist } from "../arrays/fashion";
import styles from "../styles/com.module.css";
function List(props) {
  const filteredData = playlist.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.input);
    }
  });

  return (
    <div className={styles.filter}>
      <ul>
        {" "}
        {filteredData.map((item) => (
          <li className="li" key={item.id}>
            <p className={styles.filterOne}>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
