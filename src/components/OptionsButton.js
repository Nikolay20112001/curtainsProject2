import React, { useState, useEffect} from 'react';
import '../css/OptionsButton.css';  // Подключаем стили для кнопки
import useOptionsState from '../hooks/useOptionsState'; // Хук для опций
import useStepNavigation from '../hooks/useStepNavigation'; // Хук для управления шагами
import ProgressBar from './ProgressBar';
import Tabs from './Tabs';
import TabContent from './TabContent';
import NavigationButtons from './NavigationButtons';
import selectionContent from './selectionContent';
import extraContent from './extraContent';

const OptionsButton = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { selectedOptions, handleOptionChange } = useOptionsState();
    
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

    const {
        currentStep,
        setCurrentStep,
        isTextExpandedArray,
        setTextExpandedArray,
        handleReadMore,
        tabContainerRef,
        handleNextStep,  // Используем для кнопок
        handlePrevStep   // Используем для кнопок
    } = useStepNavigation(steps.length);

    const renderDescription = (text) => {
        return text.split('\n').map((str, index) => (
            <p key={index}>{str}</p>
        ));
    };
    
    // Рассчитываем ширину прогресса
    const progressPercentage = ((currentStep + 1) / steps.length) * 100;

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
    }, [currentStep, tabContainerRef]);

    return (
        <div>
            <button className='OptionsButton' onClick={() => setMenuOpen(!isMenuOpen)}>
                Выбрать опции
            </button>

            <div className={`overlay ${isMenuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(!isMenuOpen)}></div>

            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="new-frame">
                    <div className="menu-heading">
                        <div className="menu-heading-text">Выбрать опции</div>
                        <button className="close-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
                            <img src={require('../images/Close.png')} alt="Close Menu" />
                        </button>
                    </div>

                    {/* Табы для навигации */}
                    <Tabs
                        steps={steps}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        setTextExpandedArray={setTextExpandedArray}
                    />

                    {/* Прогресс-бар */}
                    <ProgressBar progressPercentage={progressPercentage} />

                    {/* Логика отображения контента для каждого шага */}
                    <TabContent
    currentStep={currentStep}
    descriptions={descriptions}
    extraContent={extraContent}
    isTextExpandedArray={isTextExpandedArray}
    handleReadMore={handleReadMore}
    selectionContent={selectionContent(selectedOptions, handleOptionChange)}
    renderDescription={renderDescription}  // Передаём функцию
/>
                </div>

                    {/* Вставляем новый компонент для навигационных кнопок */}
                <NavigationButtons
                    currentStep={currentStep}
                    stepsLength={steps.length}
                    handleNextStep={handleNextStep}
                    handlePrevStep={handlePrevStep}
                />
            </div>
        </div>
    );
};

export default OptionsButton;