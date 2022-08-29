import React from 'react';
import {AutoSaveOptions} from 'easymde';

export interface ISideBlock {
  title: string;
  children: React.ReactNode
}

export interface IOptionsSimpleMDE {
  spellChecker: boolean;
  autofocus: boolean;
  status: false,
  maxHeight: string;
  placeholder: string;
  autosave: AutoSaveOptions
}
