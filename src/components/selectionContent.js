import React from 'react';
import '../css/OptionsButton.css';  // Подключаем стили, если нужно

const selectionContent = (selectedOptions, handleOptionChange) => [
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

export default selectionContent;