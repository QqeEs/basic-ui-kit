import styles from "./_radioButton.module.scss";

interface RbnProps {
    disabled?: boolean;
    id: string;
}

export const RadioButton = ({ disabled = false, id, ...props }: RbnProps) => {
    return (
        <div className={styles.radioButton}>
            <input
                type="radio"
                className={styles.radioButton__input}
                id={id}
                disabled={disabled}
                {...props}
            />
            <label htmlFor={id} className={styles.radioButton__label} />
        </div>
    );
};
