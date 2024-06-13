import styles from "./_textField.module.scss";

interface TFProps {
    disabled?: boolean;
    view?: string;
    placeholder?: string;
}

export const TextField = ({
    disabled = false,
    view = "main",
    placeholder = "Placeholder",
    ...props
}: TFProps) => {
    const mode = view
        ? styles[`textField__${view}`]
        : styles[`textField__${view}`];

    return (
        <div className={styles.textField}>
            <input
                type="text"
                disabled={disabled}
                placeholder={placeholder}
                {...props}
                className={styles.textField__input}
            />
            <label className={mode} />
        </div>
    );
};
