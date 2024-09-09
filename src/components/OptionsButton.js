import React, { useState, useEffect, useRef } from 'react';
import '../css/OptionsButton.css';  // Подключаем стили для кнопки
import '../css/TabComponent.css';   // Подключаем стили для этапов

const OptionsButton = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);  // Текущий шаг
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

    const [isTextExpanded, setTextExpanded] = useState(false); // New state for text expansion
    const [isStepExpanded, setStepExpanded] = useState(false); // State for step description expansion
    const [isTextExpandedArray, setTextExpandedArray] = useState(new Array(6).fill(false)); // Состояние для каждого таба

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
        "Рулон виден - ткань наматывается на вал внутрь, то есть рулон виден. Это обеспечивает прилегание ткани ближе к окну, что способствует лучшему затемнению комнаты и снижению уровня проникновения света.",
        "Расположите цепь на противоположной стороне от оконных ручек. Учитывайте размещение мебели и других элементов, которые могут затруднить управление цепью.",
        "Обеспечивает прилегание шторы к окну при откидывании створки, что:\n• Предотвращает удары нижней планки о раму и возникающий при этом неприятный шум. Особенно полезно при сквозняках.",
        "Цветовая гамма едина для всего изделия и включается в себя цвет: кронштейнов, цепи управления и нижнего отвеса."
    ];

    // Массив с уникальным содержимым для каждого таба
    const extraContent = [
        <>
            <span className="custom-title">Установка на двухсторонний скотч</span>
            <p>Самый быстрый и простой способ монтажа рулонных штор. Он не требует особых навыков или инструментов, что делает его идеальным для людей, которые хотят избежать сверления оконных рам.</p>
            <span className="custom-title">Установка на саморезы</span>
            <p>Кронштейны прикручиваются прямо к оконной раме с помощью саморезов. Это наиболее надежный и долговечный способ установки. Однако он потребует использования дополнительных инструментов</p>
            <span className="custom-title">Кронштейн на откидную створку</span>
            <p>Этот способ монтажа удобен для окон с откидными створками, поскольку позволяет крепить штору непосредственно на раму створки с возможностью её открывания и закрывания.</p>
       
        </>,
        <>
            <span className="custom-title">Рулон виден</span>
            <p>Ткань наматывается на вал внутрь, то есть рулон виден. Это обеспечивает прилегание ткани ближе к окну, что способствует лучшему затемнению комнаты и снижению уровня проникновения света.</p>
            <span className="custom-title">Рулон не виден</span>
            <p>Ткань наматывается на вал наружу, то есть рулон скрыт. Это позволяет ткани не прилегать вплотную к окну, что может быть полезно, если на подоконнике расположены предметы, которые не должны касаться шторы.</p>
        </>,
        <>
        </>,
        <>
            <p>• Исключает провисание шторы, при откинутой створке, обеспечивая лучшее затемнение комнаты.</p>
            <span className="custom-title">Леска (Установка со сверлением)</span>
            <p>Натягивается по бокам рулонной шторы и крепится к нижнему краю окна на кронштейны которые устанавливаются на саморезы. Это обеспечивает прилегание полотна шторы к стеклу. Потребуется дополнительный монтаж.</p>
            <span className="custom-title">Магниты (Установка без сверления)</span>
            <p>Магниты крепятся с помощью скотча внизу оконной рамы. Когда штора опускается, магниты автоматически притягиваются к нижнему отвесу, обеспечивая прилегание шторы к окну. Потребуется дополнительный монтаж.</p>
        </>,
        <>
        </>,
        <>
            <span className="custom-title">Груз цепи Стандарт - 0р</span>
            <p>Легкий и функциональный груз предназначен для удержания цепи в натянутом положении. Небольшой вес создает необходимый натяг, предотвращая разбалтывание цепи. Благодаря этому, цепь не улетит в открытое окно.</p>
            <span className="custom-title">Груз цепи Декор +60р</span>
            <p>Более тяжелый и эстетичный груз, также предназначен для удержания цепи в натянутом положении. Создает достаточный натяг, предотвращая разбалтывание цепи. Благодаря этому, цепь не улетит в открытое окно.</p>
            <span className="custom-title">Груз цепи Премиум +250р</span>
            <p>Тяжелый и эстетичный груз, также предназначен для удержания цепи в натянутом положении. Создает достаточный натяг, предотвращая разбалтывание цепи. Благодаря этому, цепь не улетит в открытое окно.</p>
        </>
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
                                checked={selectedOptions.option1_1}
                                onChange={() => handleOptionChange("option1_1")}
                            />
                            <div className={`option-details ${selectedOptions.option1_1 ? 'selected' : ''}`}>
                                <label>На скотч (без сверления)</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option1_2}
                                onChange={() => handleOptionChange("option1_2")}
                            />
                            <div className={`option-details ${selectedOptions.option1_2 ? 'selected' : ''}`}>
                                <label>Кронштейн на откидную створку (без сверления)</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option1_3}
                                onChange={() => handleOptionChange("option1_3")}
                            />
                            <div className={`option-details ${selectedOptions.option1_3 ? 'selected' : ''}`}>
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
                    <img src={require('../images/Image-type-install.png')} alt="Изображение" className="selection-image" />
                </div>
    
                {/* Контейнер с листом опций и итоговой ценой справа */}
                <div className="options-and-price-container">
                    {/* Лист с опциями для второго таба */}
                    <div className="option-list">
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option2_1}
                                onChange={() => handleOptionChange("option2_1")}
                            />
                            <div className={`option-details ${selectedOptions.option2_1 ? 'selected' : ''}`}>
                                <label>Видимый рулон</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option2_2}
                                onChange={() => handleOptionChange("option2_2")}
                            />
                            <div className={`option-details ${selectedOptions.option2_2 ? 'selected' : ''}`}>
                                <label>Невидимый рулон</label>
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
                    <img src={require('../images/Image-type-install.png')} alt="Изображение" className="selection-image" />
                </div>
    
                {/* Контейнер с листом опций и итоговой ценой справа */}
                <div className="options-and-price-container">
                    {/* Лист с опциями для третьего таба */}
                    <div className="option-list">
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option3_1}
                                onChange={() => handleOptionChange("option3_1")}
                            />
                            <div className={`option-details ${selectedOptions.option3_1 ? 'selected' : ''}`}>
                                <label>Рулон виден</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option3_2}
                                onChange={() => handleOptionChange("option3_2")}
                            />
                            <div className={`option-details ${selectedOptions.option3_2 ? 'selected' : ''}`}>
                                <label>Рулон не виден</label>
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
                    <img src={require('../images/Image-type-install.png')} alt="Изображение" className="selection-image" />
                </div>
    
                {/* Контейнер с листом опций и итоговой ценой справа */}
                <div className="options-and-price-container">
                    {/* Лист с опциями для третьего таба */}
                    <div className="option-list">
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option3_1}
                                onChange={() => handleOptionChange("option4_1")}
                            />
                            <div className={`option-details ${selectedOptions.option3_1 ? 'selected' : ''}`}>
                                <label>Леска (Установка со сверлением)</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option3_2}
                                onChange={() => handleOptionChange("option4_2")}
                            />
                            <div className={`option-details ${selectedOptions.option3_2 ? 'selected' : ''}`}>
                                <label>Магниты (Установка без сверления)</label>
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
                    <img src={require('../images/Image-type-install.png')} alt="Изображение" className="selection-image" />
                </div>
    
                {/* Контейнер с листом опций и итоговой ценой справа */}
                <div className="options-and-price-container">
                    {/* Лист с опциями для пятого таба (5 пунктов) */}
                    <div className="option-list">
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option5_1}
                                onChange={() => handleOptionChange("option5_1")}
                            />
                            <div className={`option-details ${selectedOptions.option5_1 ? 'selected' : ''}`}>
                                <label>Белый</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option5_2}
                                onChange={() => handleOptionChange("option5_2")}
                            />
                            <div className={`option-details ${selectedOptions.option5_2 ? 'selected' : ''}`}>
                                <label>Коричневый</label>
                                <span className="option-price">+999 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option5_3}
                                onChange={() => handleOptionChange("option5_3")}
                            />
                            <div className={`option-details ${selectedOptions.option5_3 ? 'selected' : ''}`}>
                                <label>Тёмно-серый</label>
                                <span className="option-price">+999 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option5_4}
                                onChange={() => handleOptionChange("option5_4")}
                            />
                            <div className={`option-details ${selectedOptions.option5_4 ? 'selected' : ''}`}>
                                <label>Дуб</label>
                                <span className="option-price">+999 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option5_5}
                                onChange={() => handleOptionChange("option5_5")}
                            />
                            <div className={`option-details ${selectedOptions.option5_5 ? 'selected' : ''}`}>
                                <label>Чёрный</label>
                                <span className="option-price">+999 ₽</span>
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
                    <img src={require('../images/Image-type-install.png')} alt="Изображение" className="selection-image" />
                </div>
    
                {/* Контейнер с листом опций и итоговой ценой справа */}
                <div className="options-and-price-container">
                    {/* Лист с опциями для шестого таба (4 варианта) */}
                    <div className="option-list">
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option6_1}
                                onChange={() => handleOptionChange("option6_1")}
                            />
                            <div className={`option-details ${selectedOptions.option6_1 ? 'selected' : ''}`}>
                                <label>Груз цепи Стандарт</label>
                                <span className="option-price">0 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option6_2}
                                onChange={() => handleOptionChange("option6_2")}
                            />
                            <div className={`option-details ${selectedOptions.option6_2 ? 'selected' : ''}`}>
                                <label>Груз цепи Декор</label>
                                <span className="option-price">+60 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option6_3}
                                onChange={() => handleOptionChange("option6_3")}
                            />
                            <div className={`option-details ${selectedOptions.option6_3 ? 'selected' : ''}`}>
                                <label>Груз цепи Премиум</label>
                                <span className="option-price">+250 ₽</span>
                            </div>
                        </div>
                        <div className="option-item">
                            <input
                                type="checkbox"
                                checked={selectedOptions.option6_4}
                                onChange={() => handleOptionChange("option6_4")}
                            />
                            <div className={`option-details ${selectedOptions.option6_4 ? 'selected' : ''}`}>
                                <label>Натяжитель цепи</label>
                                <span className="option-price">+0 ₽</span>
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

    const renderDescription = (text) => {
        return text.split('\n').map((str, index) => (
            <p key={index}>{str}</p>
        ));
    };
    

    // Toggle text expansion для конкретного таба
    const handleReadMore = (index) => {
        const newIsTextExpandedArray = [...isTextExpandedArray];
        newIsTextExpandedArray[index] = !newIsTextExpandedArray[index]; // Меняем состояние только для текущего таба
        setTextExpandedArray(newIsTextExpandedArray);
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
                            onClick={() => {
                                setCurrentStep(index);
                                setTextExpandedArray(new Array(6).fill(false)); // Сброс раскрытого текста при смене таба
                            }}
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
                    <div className={`step-description ${isTextExpandedArray[currentStep] ? 'expanded' : ''}`}>
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
                                {/* Если текущий шаг - не последний, рендерим стандартное описание */}
                                {currentStep !== 5 && renderDescription(descriptions[currentStep])}

                                {/* Если текущий шаг - последний (пятый таб), рендерим нужный текст с классом custom-title */}
                                {currentStep === 5 && (
                                    <>
                                        <span className="custom-title-last-tab">Натяжитель цепи - 0р</span>
                                        <p>Используется для фиксации и натяжения цепи управления. Предотвращает провисание цепи при откидывании створки, повышает детскую безопасность.. Крепится на створку при помощи скотча.</p>
                                    </>
                                )}

                                {isTextExpandedArray[currentStep] && extraContent[currentStep]}
                                
                                <div className="read-more-container">
                                    {/* Only show the button and the image if the current tab is not 3 or 5 */}
                                    {currentStep !== 2 && currentStep !== 4 && (
                                        <>
                                            <button
                                                className={isTextExpandedArray[currentStep] ? 'read-more-expanded' : 'read-more-collapsed'}
                                                onClick={() => handleReadMore(currentStep)}
                                            >
                                                {isTextExpandedArray[currentStep] ? 'Свернуть' : 'Читать дальше'}
                                            </button>
                                            <img src={require('../images/arrow-down.png')} alt="Иконка" className="read-more-icon" />
                                        </>
                                    )}
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

    {/* Если это не последний шаг, отображаем кнопку "Далее" */}
    {currentStep !== steps.length - 1 ? (
        <button className="next-button" onClick={handleNextStep}>
            Далее
            <img src={require('../images/arrow-right.png')} alt="Вперёд" className="arrow-icon" />
        </button>
    ) : (
        /* Если это последний шаг, отображаем кнопку "Перейти в корзину" */
        <button className="next-button" onClick={() => window.location.href = '/cart'}>
            Добавить в корзину
            <img src={require('../images/arrow-right.png')} alt="Корзина" className="arrow-icon" />
        </button>
    )}
</div>
            </div>
        </div>
    );
};

export default OptionsButton;
