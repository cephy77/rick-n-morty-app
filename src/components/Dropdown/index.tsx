import { useRef, useState } from 'react';
import style from './srtyle.module.scss';
import arrow from '../../assets/M-icon.svg'
import cn from 'classnames';
import { Checkbox } from '@mui/material';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface PropsTypes {
  options: string[],
  active: string,
  setActive: (option: string) => void
}

export const Dropdown = ({ options, active, setActive }: PropsTypes) => {
  const ref = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(state => !state);
  }

  const handleCloseDropdown = (deelay?: number) => {
    setTimeout(() => setIsDropdownOpen(false), deelay ? deelay : 0);
  }

  const handleSelectActive = (option: string) => {
    setActive(active === option ? '' : option);
    handleCloseDropdown(500);
  }

  useOutsideClick(ref, handleCloseDropdown);

  return (
    <div className={style.dropdownWrapper}>
      <div
        role='button'
        className={style.dropdown}
        onClick={toggleDropdown}
      >
        Select Item
        <img
          src={arrow}
          className={cn(style.dropdownArrow, {
            [style.dropdownArrowOpen]: isDropdownOpen
          })}
        />
      </div>
      {isDropdownOpen && (
        <div className={style.popover} ref={ref}>
          <ul className={style.popoverList}>
            {options.map(option => (
              <li
                className={style.popoverItem}
                role='button'
                onClick={() => handleSelectActive(option)}
                key={option}
              >
                {option} <Checkbox checked={active === option} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}