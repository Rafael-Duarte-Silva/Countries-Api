import styles from './CustomSelect.module.css';

import { ChangeEvent } from "react";

import { useAccessibilityKeyBoard } from '../../../../hooks/useAccessibilityKeyBoard';

import { IconCustomSelect } from './components/IconCustomSelect';

import { customSelectOptions } from '../../utils';

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
                role="combobox"
                aria-labelledby="select button"
                aria-haspopup="listbox"
                aria-expanded={active}
                aria-controls="select-dropdown"
            >
                <p className={styles.customSelect__text}>{selectedValue}</p>

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
                                <p>{option}</p>
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}