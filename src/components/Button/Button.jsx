import classes from './Button.module.css'

export default function Button({ children, buttonClicked, isActive }) {
    return (
        <button className={
            isActive ? `${classes.button} ${classes.active}` : classes.button
        }
            onClick={buttonClicked}
        >
            {children}
        </button>
    )
}