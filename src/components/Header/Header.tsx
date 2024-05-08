import styles from './Header.module.css';

import { useAccessibilityKeyBoard } from '../../hooks/useAccessibilityKeyBoard';

import { IconDarkmode } from './components';

type HeaderProps = {
    onChange: () => void,
    isDark: boolean
}

export const Header = ({onChange, isDark}: HeaderProps) => {
    const { accessibilityKeyDown } = useAccessibilityKeyBoard();
    
    return (
        <header className={styles.header}>
            <h1 className={styles.header__titte}>Where in the world?</h1>

            <label className={styles.darkMode} tabIndex={0} onKeyDown={accessibilityKeyDown}>
                <IconDarkmode className={styles.darkMode__icon}/>
                <input 
                    className={styles.darkMode__input} 
                    type="checkbox" 
                    name="darkModeToggle"
                    onChange={onChange}
                    checked={isDark}
                />
                <span className={styles.darkMode__title}>Dark Mode</span>
            </label>
        </header>
    );
}