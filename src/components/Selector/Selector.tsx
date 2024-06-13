import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import styles from "./_selector.module.scss";
import "./_simplebar.scss";
import "./_selector.module.scss";
import icon_arrowDown from "./Arrow-down.png";
import icon_arrowUp from "./Arrow-up.png";

interface Props {
    placeholder?: string;
    disabled?: boolean;
}

export const Selector = ({
    placeholder = "Placeholder",
    disabled = false,
}: Props) => {
    const [isItem, setIsItem] = useState(false);
    const [selected, setSelected] = useState(placeholder);
    const options = [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
        "Option 6",
        "Option 7",
        "Option 8",
        "Option 9",
        "Option 10",
    ];

    const handleClick = () => {
        if (!disabled) {
            setIsItem(!isItem);
        }
    };

    return (
        <div className={styles.custom__select__container}>
            <div
                className={`${styles.custom__select__btn} ${disabled ? styles.disabled : ""}`}
                onClick={handleClick}
            >
                {disabled ? "Disabled" : isItem ? "Select option" : selected}

                <img
                    src={isItem ? icon_arrowUp : icon_arrowDown}
                    alt="#"
                    draggable="false"
                ></img>
            </div>
            {isItem && (
                <SimpleBar style={{ maxHeight: 180 }}>
                    <div className={styles.custom__select__content}>
                        {options.map((option) => (
                            <div
                                className={styles.custom__select__item}
                                onClick={() => {
                                    setSelected(option);
                                    setIsItem(false);
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </SimpleBar>
            )}
        </div>
    );
};
