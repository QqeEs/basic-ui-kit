import styles from "./_buttons.module.scss";

interface BtnProps {
    view?: string;
    label: string;
    disabled?: boolean;
}

export const Buttons = ({
    view = "primary",
    disabled = false,
    label,
    ...props
}: BtnProps) => {
    const btnMode = view
        ? styles[`button__${view}`]
        : styles[`button__${view}`];

    return (
        <div className={styles.button}>
            <button
                type="button"
                className={btnMode}
                disabled={disabled}
                {...props}
            >
                {label}
            </button>
        </div>
    );
};
