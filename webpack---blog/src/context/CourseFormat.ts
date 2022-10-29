import React from 'react';
export default React.createContext({
  format: '',
  toggleFormat: (newFormat?: string): void => {}
});
