import React, { useState, useEffect, useRef } from 'react';
import '../css/OptionsButton.css';  // Подключаем стили для кнопки
import '../css/TabComponent.css';   // Подключаем стили для этапов

const OptionsButton = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);  // Текущий шаг
    const [selectedOptions, setSelectedOptions] = useState({
        option1: true,
        option2: false,
        option3: true
    });

    // Реф для контейнера табов
    const tabContainerRef = useRef(null);

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

    // Содержимое selection-container и изображений для каждого таба
    const selectionContent = [
        (
            <div className="selection-container">
                {/* Изображение слева */}
                <div className="selection-image-container">
                    <img src={require('../images/Image-type-install.png')} alt="Изображение" className="selection-image" />
                </div>

                {/* Контейнер с листом опций и итоговой ценой справа */}
                <div className="options-and-price-container">
                    {/* Лист с опциями */}
                    <div className="option-list">
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option1}
                                onChange={() => handleOptionChange("option1")}
                            />
                            <div className={`option-details ${selectedOptions.option1 ? 'selected' : ''}`}>
                                <label>На скотч (без сверления)</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option2}
                                onChange={() => handleOptionChange("option2")}
                            />
                            <div className={`option-details ${selectedOptions.option2 ? 'selected' : ''}`}>
                                <label>Кронштейн на откидную створку (без сверления)</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option3}
                                onChange={() => handleOptionChange("option3")}
                            />
                            <div className={`option-details ${selectedOptions.option3 ? 'selected' : ''}`}>
                                <label>На саморезы</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                    </div>

                    {/* Итоговая стоимость */}
                    <div className="total-price">
                        Общая стоимость: <strong className="total-price-value">11 243 ₽</strong>
                    </div>
                </div>
            </div>
        ),
        (
            <div className="selection-container">
                {/* Изображение слева */}
                <div className="selection-image-container">
                    <img src={require('../images/Youtube.png')} alt="Изображение" className="selection-image" />
                </div>

                {/* Контейнер с листом опций и итоговой ценой справа */}
                <div className="options-and-price-container">
                    <div className="option-list">
                        <div className="option-item">
                            <label htmlFor="visibility">Видимость рулона</label>
                            <select id="visibility" name="visibility">
                                <option value="visible">Рулон виден</option>
                                <option value="hidden">Рулон не виден</option>
                            </select>
                        </div>
                    </div>

                    {/* Итоговая стоимость */}
                    <div className="total-price">
                        Общая стоимость: <strong className="total-price-value">11 243 ₽</strong>
                    </div>
                </div>
            </div>
        ),
        // Добавьте содержимое для остальных табов, если нужно
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

    // Прокручиваем контейнер табов при изменении шага
    useEffect(() => {
        if (tabContainerRef.current) {
            const container = tabContainerRef.current;

            if (currentStep >= 4) {
                // Прокрутка вперёд для шага 5 и выше
                const activeTab = container.children[currentStep];
                const scrollOffset = activeTab.offsetLeft - container.offsetLeft;
                container.scrollTo({
                    left: scrollOffset,
                    behavior: 'smooth'
                });
            } else {
                // Возвращаем контейнер в начало при переходе на шаг 4 и меньше
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }, [currentStep]);

    // Функция для обработки изменения состояния опций
    const handleOptionChange = (option) => {
        setSelectedOptions({
            ...selectedOptions,
            [option]: !selectedOptions[option]
        });
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
                    <div className="tab-container" ref={tabContainerRef}>
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
                        <div className="video-container">
                            <div className="icon-container">
                                <img src={require('../images/Youtube.png')} alt="Смотреть видео" className="youtube-icon" />
                            </div>
                            <div className="link-container">
                                <a href="#" className="watch-video-link">Смотреть видео</a>
                            </div>
                        </div>

                        <div className="description-content">
                            <img src={require('../images/Answer.png')} alt="Иконка" className="description-icon" />
                            <div className="description-text">
                                <p>{descriptions[currentStep]}</p>
                                <div className="read-more-container">
                                    <button className="read-more">Читать дальше</button>
                                    <img src={require('../images/arrow-down.png')} alt="Иконка" className="read-more-icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Два контейнера на одном уровне */}
                    <div className="selection-container">
                        {/* Отображаем содержимое в зависимости от таба */}
                        {selectionContent[currentStep]}
                    </div>
                </div>

                {/* Кнопки навигации с нумерацией шага */}
                <div className="step-navigation">
                    <button className="prev-button" onClick={handlePrevStep} disabled={currentStep === 0}>
                        <img src={require('../images/arrow-left.png')} alt="Назад" className="arrow-icon" />
                        Назад
                    </button>

                    {/* Нумерация шагов */}
                    <div className="step-counter">
                        <span className="step-current">{currentStep + 1}/</span><span className="step-total">{steps.length}</span>
                    </div>

                    <button className="next-button" onClick={handleNextStep} disabled={currentStep === steps.length - 1}>
                        Далее
                        <img src={require('../images/arrow-right.png')} alt="Вперёд" className="arrow-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OptionsButton;
