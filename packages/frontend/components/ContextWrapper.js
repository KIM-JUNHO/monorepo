import HeaderContext from '../contexts/HeaderContext';
import { useState } from 'react';

function ContextWrapper({ children, navigation }) {
  const [menuItems] = useState(navigation);
  const [linkColor, toggleLinkColor] = useState(true);

  return (
    <HeaderContext.Provider value={{ menuItems, linkColor, toggleLinkColor }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default ContextWrapper;
