import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createNote: ['note']
});

export const NotesTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  notes: []
});

/* ------------- Selectors ------------- */

export const NotesSelectors = {
  getData: state => state.data
};

/* ------------- Reducers ------------- */

// request the data from an api
export const createNote = (state, { note }) => {
  console.log([...state.notes, note]);
  if (note) {
    return { notes: [...state.notes, note] };
  }
  return state;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_NOTE]: createNote
});
