import React, { useState, useContext, useCallback } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [showSlide, setShowSlide] = useState(false)

  const handleToggleMenu = useCallback(() => {
    setShowSlide((prev) => !prev);
    document.body.classList.toggle('no-scroll');
  }, []);

  const RemoveToggleMenu =useCallback(() => {
    setShowSlide((prev) => false);
    document.body.classList.toggle('no-scroll');
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(prev=>prev=window.innerWidth < 768);
      console.log('log screen', isSmallScreen)
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode,isSmallScreen,handleToggleMenu, showSlide, toggleTheme,RemoveToggleMenu }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
