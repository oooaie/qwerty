import React, { useRef, useEffect } from 'react';
import './PadSheet.scss';

function PadSheet() {
  const sheet = useRef(null);

  useEffect(() => {
    sheet.current.addEventListener('paste', handlePaste);

    function handlePaste(e) {
      var clipboardData, pastedData;

      e.stopPropagation();
      e.preventDefault();

      clipboardData = e.clipboardData || window.clipboardData;
      pastedData = clipboardData.getData('Text');

      document.execCommand('insertText', false, pastedData);
    }
  }, []);

  return (
    <div
      ref={sheet}
      className='pad__sheet'
      contentEditable
      suppressContentEditableWarning
    ></div>
  );
}

export default PadSheet;
