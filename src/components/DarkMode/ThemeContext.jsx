import React, { useState, useContext, useCallback } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('mode') || false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showSlide, setShowSlide] = useState(false);
  const [isbookMarked, setIsBookMarked] = useState(false)
  const [meaning, setMeaning] = useState(JSON.parse(localStorage.getItem("bookmarkedWords")) || [
    { word: "word", isBookmarked: false, isSaved: false, save: "" },
  ]);

  const addingWord = (word, meaning) => {

    const existingWords = JSON.parse(localStorage.getItem("bookmarkedWords")) || [];
    const existingWord = existingWords.find((w) => w.word === word);

    if (existingWord) {
      existingWord.isBookmarked = !existingWord.isBookmarked;
      existingWord.isSaved = true;
      existingWord.save = meaning;
    }  
    else {
      const newWord = {
        word: word,
        isBookmarked: true,
        isSaved: true,
        save: meaning,
      };
      existingWords.push(newWord);
    }
    // setMeaning((JSON.stringify(existingWords)))
    localStorage.setItem("bookmarkedWords", JSON.stringify(existingWords));
    // setMeaning(JSON.parse(localStorage.getItem("bookmarkedWords")))
    console.log("let me check is existing", existingWords)
    setMeaning(prev => [...prev, ...existingWords])
    return existingWord.isBookmarked
  };

  const bookMarking = (word) => {
    const existingWords = [...meaning]
    const existingWord = existingWords.find((w) => w.word === word);
 if (existingWord) {
  console.log("bookmarked")
      existingWord.isBookmarked = !existingWord.isBookmarked;
      existingWord.isSaved = true;
      existingWord.save = meaning;
    } else{
      alert("not bookmarked")
    }


    // console.log("we find the word to book mark", word)
    // setMeaning(JSON.parse(localStorage.getItem("bookmarkedWords")))

    // const updatedMeaning = [...meaning]
    // console.log('updatedMeaning:', updatedMeaning);
    // console.log('meaning:', meaning);

    // setMeaning((meaning) => {
    //   const wordIndex = updatedMeaning.findIndex((mng) => {
    //     console.log("comparing:", mng.word, word);
    //     return mng.word === word
    //   });
    //   console.log('index of the word is ', wordIndex)

    //   if (wordIndex >= 0) {
    //     console.log("we get into the index if", wordIndex)
    //     updatedMeaning[wordIndex].isBookmarked = true;
    //     localStorage.setItem("bookmarkedWords", JSON.stringify(updatedMeaning));
    //   }
    //   console.log(updatedMeaning)

    //   return updatedMeaning;
    // });
  };


  const addNote = (word) => { };

  const checkBookmark = (word) => {
    if (meaning) {
      const bookmarked = meaning.some(mng => {
        console.log("ggggg", mng.word, word, mng.isBookmarked)
        console.log(mng.word === word && mng.isBookmarked)
        return mng.word === word && mng.isBookmarked
      });
      console.log(bookmarked)
      setIsBookMarked(prev => prev = bookmarked);
    }
    return isbookMarked
  };


  const toggleTheme = () => {
    localStorage.setItem('mode', !isDarkMode)
    return setIsDarkMode(!isDarkMode)
  };

  const handleToggleMenu = useCallback(() => {
    setShowSlide((prev) => !prev);
    document.body.classList.toggle("no-scroll");
  }, []);

  const RemoveToggleMenu = useCallback(() => {
    setShowSlide((prev) => false);
    document.body.classList.toggle("no-scroll");
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen((prev) => (prev = window.innerWidth < 768));
      console.log("log screen", isSmallScreen);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        isSmallScreen,
        isbookMarked,
        handleToggleMenu,
        showSlide,
        toggleTheme,
        RemoveToggleMenu,
        bookMarking,
        addingWord,
        checkBookmark
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
