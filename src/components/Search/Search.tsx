import { useState } from "react";
import styles from "./_search.module.scss";
import icon_clear from "./clear.png";

interface TFProps {
    placeholder?: string;
}

export const Search = ({ placeholder = "Search", ...props }: TFProps) => {
    const [count, setCount] = useState("");

    const handleClear = () => {
        setCount("");
    };

    const clearButton = count && (
        <div className={styles.clear}>
            <button className={styles.clear__button} onClick={handleClear}>
                <img src={icon_clear} alt="#" draggable="false"></img>
            </button>
        </div>
    );

    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder={placeholder}
                value={count}
                onChange={(e) => setCount(e.target.value)}
                {...props}
                className={styles.search__input}
            />
            {clearButton}
        </div>
    );
};
