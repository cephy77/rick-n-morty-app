import Fab from '@mui/material/Fab';
import style from './srtyle.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import { CSVLink } from 'react-csv';
import { downloadCsv } from '../../helpers/downloadCsv';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useLocation } from 'react-router';
import { Drawer } from '@mui/material';
import more from '../../assets/more-vertical.svg';
import close from '../../assets/v-icon.svg';
import historyIcon from '../../assets/alert-circle.svg';
import csvDownload from '../../assets/download.svg';




export const FAB = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { characters } = useAppSelector(state => state.characters);
  const { history } = useAppSelector(state => state.history);

  const toggleOpen = () => {
    if (isShown) {
      setIsOpen(state => !state);
      setTimeout(() => setIsShown(false), 400);
    } else {
      setIsShown(true);
      setTimeout(() => setIsOpen(true), 0);
    }
  }

  return (
    <div className={style.fab}>
      <Drawer
        anchor={'right'}
        open={isHistoryOpen}
        onClose={() => {
          setIsHistoryOpen(false);
        }}
        classes={{
          paper: style.drawer
        }}
      >
        <div className={style.drawerContent}>
          <h3 className={style.drawerHeading}>History</h3>
          <ul className={style.drawerList}>
            {history.length === 0 && ("There is no records")}
            {history.map((point, i) => (
              <li
                className={style.drawerListItem}
                key={i}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
      {isShown && (
        <>
          <div
            className={cn(style.fabHistory, {
              [style.fabHistoryHidden]: !isOpen
            })}
            onClick={() => {
              setIsHistoryOpen(true);
              toggleOpen();
            }}
          >
            <Fab
              size='small'
              aria-label="add"
            >
              <img src={historyIcon} />
            </Fab>

          </div>

          <CSVLink
            data={downloadCsv(characters || [])}
            target="_blank"
            className={cn(style.fabCSV, {
              [style.fabCSVHidden]: !isOpen
            })}
            onClick={() => {
              if (pathname !== '/') {

                return false;
              }
            }}
          >
            <Fab
              size='small'
              aria-label="add"
            >
              <img src={csvDownload} />

            </Fab>
          </CSVLink>
        </>
      )}

      <Fab
        aria-label="add"
        onClick={toggleOpen}
      >
        <img src={isOpen ? close : more} />
      </Fab>
    </div>
  );
}