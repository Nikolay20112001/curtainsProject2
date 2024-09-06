import React, { useState } from 'react';
import '../css/TabComponent.css';  // Подключаем стили для вкладок

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(0);  // Управление активной вкладкой

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tab-container">
            {["Тип установки", "Видимость рулона (намотка)", "Сторона крепления цепи", "Фиксация", "Цветовая гамма", "Удобство управления"].map((tab, index) => (
                <button
                    key={index}
                    className={`tab-item ${activeTab === index ? 'active' : ''}`}
                    onClick={() => handleTabClick(index)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default TabComponent;
