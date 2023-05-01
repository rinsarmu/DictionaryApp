import { useState } from "react";

function Toast({ message, show }) {
  const [isOpen, setIsOpen] = useState(true);
  
  // Close the toast after 3 seconds
  setTimeout(() => {
    setIsOpen(false);
  }, 3000);

  return (
    <div className={`${isOpen ? "fixed" : "hidden"} top-0 left-0 right-0 p-4 bg-green-500 text-white text-center`}>
      {message}
    </div>
  );
}


export default Toast