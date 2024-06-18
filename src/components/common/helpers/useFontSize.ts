import { useCallback, useEffect, useState } from 'react';

const useFontSize = (buttons: string[]) => {
  const [resultFontSize, setResultFontSize] = useState(10);

  const calculateMaxButtonsInContainer = useCallback(
    (fontSize: number) => {
      // Maximum width for the button container.
      const containerWidth = 250;
      // Maximum height for the button container.
      const containerHeight = 140;
      // Implemented button padding.
      const buttonMargin = 2;

      // We determine the available width whenever we introduce a new button.
      let availableWidth = containerWidth;
      // We calculate the available height each time we add a new row.
      let availableHeight = containerHeight;
      let maxButtons = 0;

      for (const buttonLabel of buttons) {
        const buttonWidth = calculateButtonWidth(buttonLabel, fontSize);
        const buttonHeight = fontSize + 4;

        if (
          buttonWidth + buttonMargin <= availableWidth &&
          buttonHeight <= availableHeight
        ) {
          // Sufficient width is accessible for the specified button.
          maxButtons++;
          availableWidth -= buttonWidth + buttonMargin;
          availableHeight -= buttonHeight;
        } else {
          // Move to a new row if the current button doesn't fit
          availableWidth = containerWidth;
          availableHeight -= buttonHeight;

          if (buttonHeight > availableHeight) {
            // This signifies that we have reached the maximum allowable number of rows.
            break;
          }

          if (
            buttonWidth + buttonMargin <= availableWidth &&
            buttonHeight <= availableHeight
          ) {
            // Sufficient width is accessible for the specified button.
            maxButtons++;
            availableWidth -= buttonWidth + buttonMargin;
            availableHeight -= buttonHeight;
          } else {
            // Unable to accommodate a button within the provided row.
            break;
          }
        }
      }

      return maxButtons;
    },
    [buttons],
  );

  // Initially, we are utilizing the smallest font size to accommodate the maximum number of buttons within the container.
  let maxButtonsInContainer = calculateMaxButtonsInContainer(10);

  useEffect(() => {
    let low = 10;
    let high = 24;
    while (low < high) {
      const mid = Math.ceil((low + high) / 2);
      // We determine the maximum number of buttons that can fit in the container based on the font size represented by the midpoint value.
      const buttonsThatFit = calculateMaxButtonsInContainer(mid);
      if (buttonsThatFit === maxButtonsInContainer) {
        // If the calculated maximum number of buttons that can fit in the container matches the maximum allowed buttons, then we set the font size to the midpoint value and proceed to evaluate for a higher value.
        low = mid + 1;
        setResultFontSize(mid);
      } else {
        // In this context, if the buttons are smaller in number than the maximum buttons allowed in the container, we should reduce the midpoint value and reevaluate.
        high = mid - 1;
      }
    }
  }, [maxButtonsInContainer, calculateMaxButtonsInContainer]);

  function calculateButtonWidth(label: string, fontS: number) {
    const fontMultiplier = 0.6;
    return label.length * fontS * fontMultiplier;
  }

  return resultFontSize;
};

export default useFontSize;
