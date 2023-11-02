import React from 'react';
import './index.css';
import {state} from './state/state';
import {rerenderEntireTree} from './rerender';

rerenderEntireTree(state)