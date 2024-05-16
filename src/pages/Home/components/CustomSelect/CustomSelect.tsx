import styles from './CustomSelect.module.css';

import { ChangeEvent } from "react";

import { useAccessibilityKeyBoard } from '../../../../hooks/useAccessibilityKeyBoard';

import { IconCustomSelect } from './components/IconCustomSelect';

import { customSelectOptions } from '../../consts';

type CustomSelectProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    selectedValue: string,
    onClick: () => void,
    active: boolean
}

export const CustomSelect = ({ onChange, selectedValue, onClick, active }: CustomSelectProps) => {
    const { accessibilityKeyDown } = useAccessibilityKeyBoard();

    return (
        <div className={styles.containerCustomSelect}>
            <button
                className={styles.customSelect}
                onClick={onClick}
                type="button"
                role="open dropDown"
                aria-label="custom select"
                aria-haspopup="listbox"
                aria-expanded={active}
            >
                <span className={styles.customSelect__text}>{selectedValue}</span>

                <IconCustomSelect
                    className={active ? `${styles.customSelect__icon} ${styles.Active}` : styles.customSelect__icon}
                />
            </button>

            {active && (
                <ul
                    className={styles.selectDropdown}
                    role="listbox"
                >
                    {customSelectOptions.map((option, index) => (
                        <li role="option" key={index}>
                            <label tabIndex={0} onKeyDown={accessibilityKeyDown}>
                                <input type='radio' name="region" value={option} onChange={onChange} />
                                <span>{option}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}