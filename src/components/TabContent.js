// TabContent.js
import React from 'react';

const TabContent = ({ 
    currentStep, 
    descriptions, 
    extraContent, 
    isTextExpandedArray, 
    handleReadMore, 
    selectionContent = [], 
    renderDescription // Добавляем renderDescription как пропс
}) => {
    const content = selectionContent[currentStep];

    return (
        <div>
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
                        {/* Используем renderDescription для рендеринга описаний */}
                        {descriptions && descriptions[currentStep] && renderDescription(descriptions[currentStep])}

                        {currentStep === 5 && (
                            <>
                                <span className="custom-title-last-tab">Натяжитель цепи - 0р</span>
                                <p>Используется для фиксации и натяжения цепи управления...</p>
                            </>
                        )}

                        {isTextExpandedArray[currentStep] && extraContent[currentStep]}

                        <div className="read-more-container">
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

            <div className="selection-container">
                {content ? content : <div>Контент для этого шага отсутствует.</div>}
            </div>
        </div>
    );
};

export default TabContent;
