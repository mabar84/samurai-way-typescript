import React from 'react';
import './index.css';
import {onChangeTextArea, state} from './state/state';
import {addPost} from './state/state';
import {addMessage} from './state/state';
import {rerenderEntireTree} from './rerender';


rerenderEntireTree(state, addPost, addMessage, onChangeTextArea)