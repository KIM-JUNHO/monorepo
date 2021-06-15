import HeaderContext from '../contexts/HeaderContext';
import { useContext } from 'react';

const ToggleNavigationColorButton = () => {
  const { linkColor, toggleLinkColor } = useContext(HeaderContext);

  return <button onClick={() => toggleLinkColor(!linkColor)}>Toggle Navigation Color</button>;
};

export default ToggleNavigationColorButton;
