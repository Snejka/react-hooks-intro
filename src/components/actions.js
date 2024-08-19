import React from 'react';
import { v4 as uuidv4 } from 'uuid';


export const actionTodosToggle = (state, payload) => state.todos.map( todo => (todo.id === payload.id) ? {...payload, complete: !payload.complete } : todo );
export const actionRemoveTodos = (state, payload) => state.todos.filter( todo => (todo.id !== payload.id) );
export const actionAddTodo = (state, payload) => {return ({id:uuidv4(), text: payload, complete: false})};