import React from 'react';

const NavigationButtons = ({ currentStep, stepsLength, handleNextStep, handlePrevStep }) => {
    return (
        <div className="step-navigation">
            <button 
                className="prev-button" 
                onClick={handlePrevStep} 
                disabled={currentStep === 0}
            >
                <img src={require('../images/arrow-left.png')} alt="Назад" className="arrow-icon" />
                Назад
            </button>

            {/* Нумерация шагов */}
            <div className="step-counter">
                <span className="step-current">{currentStep + 1}/</span>
                <span className="step-total">{stepsLength}</span>
            </div>

            {/* Если это не последний шаг, отображаем кнопку "Далее" */}
            {currentStep !== stepsLength - 1 ? (
                <button className="next-button" onClick={handleNextStep}>
                    Далее
                    <img src={require('../images/arrow-right.png')} alt="Вперёд" className="arrow-icon" />
                </button>
            ) : (
                <button className="next-button" onClick={() => window.location.href = '/cart'}>
                    Добавить в корзину
                    <img src={require('../images/arrow-right.png')} alt="Корзина" className="arrow-icon" />
                </button>
            )}
        </div>
    );
};

export default NavigationButtons;
