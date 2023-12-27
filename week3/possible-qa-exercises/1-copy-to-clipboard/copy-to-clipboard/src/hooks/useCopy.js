import { useState } from 'react';

export const useCopy = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = (inputString) => {
    navigator.clipboard
      .writeText(inputString)
      .then(() => {
        setCopySuccess(true);
      })
      .catch((error) => {
        console.error(`Error copying input: ${error.message}`);
        setCopySuccess(false);
      });
  };

  const resetCopyStatus = () => {
    setCopySuccess(false);
  };

  return [handleCopy, copySuccess, resetCopyStatus];
};
