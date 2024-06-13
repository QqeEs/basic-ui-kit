import styles from "./_checkbox.module.scss";

interface CbxProps {
    disabled?: boolean;
    id: string;
}

export const Checkbox = ({ disabled = false, id, ...props }: CbxProps) => {
    return (
        <div className={styles.checkbox}>
            <input
                type="checkbox"
                className={styles.checkbox__input}
                id={id}
                disabled={disabled}
                {...props}
            />
            <label htmlFor={id} className={styles.checkbox__label} />
        </div>
    );
};
