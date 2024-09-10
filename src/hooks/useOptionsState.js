// /hooks/useOptionsState.js
import { useState } from 'react';

const useOptionsState = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    option1_1: false,
    option1_2: false,
    option1_3: false,
    option2_1: false,
    option2_2: false,
    option3_1: false,
    option3_2: false,
    option4_1: false,
    option4_2: false,
    option5_1: false,
    option5_2: false,
    option5_3: false,
    option5_4: false,
    option5_5: false,
    option6_1: false,
    option6_2: false,
    option6_3: false,
    option6_4: false,
  });

  const handleOptionChange = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return {
    selectedOptions,
    handleOptionChange,
  };
};

export default useOptionsState;
