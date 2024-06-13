import styles from "./_switch.module.scss";

interface Props {
    disabled?: boolean;
    id: string;
}

export const Switch = ({ disabled = false, id, ...props }: Props) => {
    return (
        <div className={styles.switch}>
            <input
                type="checkbox"
                className={styles.switch__input}
                disabled={disabled}
                id={id}
                {...props}
            />
            <label htmlFor={id} className={styles.switch__label} />
        </div>
    );
};
