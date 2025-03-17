import { createContext, useState } from "react";

export const MessageContext = createContext({
  message: {
    type: "",
    content: "",
  },
  setMessage: () => {},
});

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState({ type: "", content: "" });
  const showMessage = (type, content) => {
    setMessage({ type, content });
    setTimeout(() => {
      setMessage({ type: "", content: "" });
    }, 3000);
  };

  return (
    <MessageContext.Provider value={{ message, showMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
