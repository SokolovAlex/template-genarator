import { combineEpics } from 'redux-observable';
import FilterEpics from './filters/epic';
import ListEpics from './list/epic';
import LoadersEpics from './loaders/epic';
import LocalizationEpics from './localization/epic';

const LocatorEpics = combineEpics(FilterEpics, ListEpics, LoadersEpics, LocalizationEpics);

export default LocatorEpics;
