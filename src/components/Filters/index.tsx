import { useState } from 'react';
import style from './srtyle.module.scss';
import { Dropdown } from '../Dropdown';
import { useFormik } from 'formik';
import { Inputs, CharacterInputs } from '../../types/FormTypes';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setQuery } from '../../features/characters/charactersSlice';
import { addToHistory } from '../../features/history/historySlice';

const inputs: Inputs = {
  character: {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  }
}


export const Filters = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');
  const dispatch = useAppDispatch();


  const formik = useFormik({
    initialValues: {
      ...inputs.character
    },
    onSubmit: values => {
      let query = '';
      Object.keys(values).forEach((value) => {
        values[value as keyof CharacterInputs] &&
          (query += `${value}: "${values[value as keyof CharacterInputs]}"`);
      });
      dispatch(setQuery(query));
      dispatch(addToHistory(`Filter characters by ${query}`))
    }
  })

  const handleOpenFilters = () => {
    if (isFiltersOpen) {
      dispatch(setQuery(''));
    }

    setIsFiltersOpen(state => !state);
  }

  const handleSetFilter = (option: string) => {
    setActiveFilter(option);
  }

  return (
    <div className={style.filters}>
      <button className={style.filtersButton} onClick={handleOpenFilters}>
        {isFiltersOpen ? 'Remove Filter' : 'Filter'}
      </button>

      {isFiltersOpen && (
        <div className={style.filtersOptions}>
          <Dropdown
            options={['Caracter']}
            active={activeFilter}
            setActive={handleSetFilter}
          />
          {Boolean(activeFilter) && (
            <>
              <form
                onSubmit={formik.handleSubmit}
                id='filterForm'
                className={style.filtersForm}
              >
                <div className={style.filtersInputs}>
                  {Object.keys(inputs.character).map((option) => (
                    <input
                      type='text'
                      id={option}
                      name={option}
                      className={style.filtersInput}
                      onChange={formik.handleChange}
                      value={formik.values[option as keyof CharacterInputs]}
                      key={option}
                      placeholder={option.charAt(0).toUpperCase() + option.slice(1)}
                    />
                  ))}
                </div>
              </form>
              <button form="filterForm" type="submit" className={style.filtersButton}>
                Find
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}