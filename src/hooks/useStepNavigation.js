import { useState, useEffect, useRef } from 'react';

const useStepNavigation = (stepsLength) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTextExpandedArray, setTextExpandedArray] = useState(new Array(stepsLength).fill(false));
  const tabContainerRef = useRef(null);

  const handleNextStep = () => {
    if (currentStep < stepsLength - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReadMore = (index) => {
    const newIsTextExpandedArray = [...isTextExpandedArray];
    newIsTextExpandedArray[index] = !newIsTextExpandedArray[index];
    setTextExpandedArray(newIsTextExpandedArray);
  };

  // Прокрутка контейнера табов
  useEffect(() => {
    if (tabContainerRef.current) {
      const container = tabContainerRef.current;
      if (currentStep >= 4) {
        const activeTab = container.children[currentStep];
        const scrollOffset = activeTab.offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: scrollOffset,
          behavior: 'smooth',
        });
      } else {
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }, [currentStep]);

  return {
    currentStep,
    setCurrentStep,  // Возвращаем функцию
    handleNextStep,
    handlePrevStep,
    isTextExpandedArray,
    setTextExpandedArray,  // Возвращаем функцию
    handleReadMore,
    tabContainerRef,
    };
};

export default useStepNavigation;
