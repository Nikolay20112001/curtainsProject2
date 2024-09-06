import React, { useState } from 'react';
import '../css/OptionsButton.css';  // Подключаем стили для кнопки
import '../css/TabComponent.css';   // Подключаем стили для этапов

const OptionsButton = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);  // Текущий шаг

    const steps = [
        { title: "Тип установки", styleClass: "step-installation" },
        { title: "Видимость рулона (намотка)", styleClass: "step-visibility" },
        { title: "Сторона крепления цепи", styleClass: "step-side" },
        { title: "Фиксация", styleClass: "step-fixation" },
        { title: "Цветовая гамма", styleClass: "step-color" },
        { title: "Удобство управления", styleClass: "step-comfort" }
    ];

    const descriptions = [
        "Вы можете выбрать несколько вариантов крепления, исходя из ваших условий или предпочтений. В комплект поставки мы включим все отмеченные вами кронштейны.",
        "Описание для Видимости рулона",
        "Описание для Стороны крепления цепи",
        "Описание для Фиксации",
        "Описание для Цветовой гаммы",
        "Описание для Удобства управления"
    ];

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);  // Переход на следующий шаг
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);  // Переход на предыдущий шаг
        }
    };

    // Рассчитываем ширину прогресса
    const progressPercentage = ((currentStep + 1) / steps.length) * 100;

    return (
        <div>
            <button className='OptionsButton' onClick={toggleMenu}>
                Выбрать опции
            </button>

            <div className={`overlay ${isMenuOpen ? 'visible' : ''}`} onClick={toggleMenu}></div>

            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="new-frame">
                    <div className="menu-heading">
                        <div className="menu-heading-text">Выбрать опции</div>
                        <button className="close-icon" onClick={toggleMenu}>
                            <img src={require('../images/Close.png')} alt="Close Menu" />
                        </button>
                    </div>

                    {/* Этапы (табы) с индивидуальными стилями */}
                    <div className="tab-container">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`tab-item ${step.styleClass} ${currentStep === index ? 'active' : ''}`}
                            >
                                {step.title}
                            </div>
                        ))}
                    </div>

                    {/* Прогресс-бар */}
                    <div className="progress-bar-background">
                        <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
                    </div>

                    {/* Описание этапа */}
                    <div className="step-description">
                        <img src="/images/VideoIcon.png" alt="Видео" className="description-icon" />
                        <p>{descriptions[currentStep]}</p>
                    </div>

                    {/* Элемент с изображением и опциями */}
                    <div className="selection-options">
                        <img src="/images/Placeholder.png" alt="Изображение" className="selection-image" />

                        <div className="option-list">
                            <div className="option-item">
                                <input type="checkbox" checked />
                                <label>На скотч (без сверления)</label>
                                <span>0 ₽</span>
                            </div>
                            <div className="option-item">
                                <input type="checkbox" />
                                <label>Кронштейн на откидную створку (без сверления)</label>
                                <span>0 ₽</span>
                            </div>
                            <div className="option-item">
                                <input type="checkbox" checked />
                                <label>На саморезы</label>
                                <span>0 ₽</span>
                            </div>
                        </div>

                        <div className="total-price">
                            Общая стоимость: <strong>11 243 ₽</strong>
                        </div>
                    </div>

                    {/* Кнопки навигации с нумерацией шага */}
                    <div className="step-navigation">
                        <button className="prev-button" onClick={handlePrevStep} disabled={currentStep === 0}>
                            Назад
                        </button>

                        {/* Нумерация шагов */}
                        <div className="step-counter">
                            {currentStep + 1}/{steps.length}
                        </div>

                        <button className="next-button" onClick={handleNextStep} disabled={currentStep === steps.length - 1}>
                            Далее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptionsButton;
