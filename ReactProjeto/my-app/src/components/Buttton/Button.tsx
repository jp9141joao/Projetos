import styles from './Button.module.css';
import scssStyles from './Button.module.scss';

interface buttonProps {
    label: string,
    onClick: () => void
}

function Button({ label, onClick } : buttonProps){

    return (
        <button className={`${styles.button} ${scssStyles.customButton}`} onClick={onClick}>
            {label}
        </button>  
    )
}

export default Button;