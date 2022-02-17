import { createAction, props } from '@ngrx/store';
import { actionTypes } from './actionTypes';

export const registerAction = createAction(
  actionTypes.REGISTER,
  props<{ username: string; password: string; email: string }>()
);