'use client'
import { createContext, useContext, useReducer, ReactNode } from 'react';

interface FileState {
  selectedFiles: FileList | null;
  buyCart: any;
}

interface FileContextType {
  state: FileState;
  dispatch: (action: { type: string; payload: any }) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error('useFileContext must be used within a FileProvider');
  }
  return context;
};

const initialState: FileState = {
  selectedFiles: null,
  buyCart: null,
};

const fileReducer = (state: FileState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'SET_SELECTED_FILES':
      return {
        ...state,
        selectedFiles: action.payload,
      };
      case 'REMOVE_FILE':
      if (state.selectedFiles && typeof action.payload === 'number') {
        const updatedFiles = Array.from(state.selectedFiles);
        updatedFiles.splice(action.payload, 1);
        return {
          ...state,
          selectedFiles: updatedFiles,
        };
      }
      return state;
      case 'BUY_CART':
        return {
          ...state,
          buyCart: action.payload
        }
    default:
      return state;
  }
};

interface FileProviderProps {
  children: ReactNode;
}

export const FileProvider = ({ children }: FileProviderProps) => {
  const [state, dispatch] = useReducer(fileReducer, initialState);

  return (
    <FileContext.Provider value={{ state, dispatch }}>
      {children}
    </FileContext.Provider>
  );
};
