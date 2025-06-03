import { Card } from "..Card/Card"; // Импортируем компонент Card
import React, { useState, useEffect } from "react";

// Компонент уведомления
export const Notification = ({ message, type, onClose, autoHideDuration = 3000}) => {
  // передаем пропсы
  const [visible, setVisible] = useState(true); // Стейт для хранения состояний
  const [notificationMessage, setNotificationMessage] = useState(null); // изменение состояний 
  const [notificationType, setNotificationType] = useState("info"); // Тип уведомления

  const handleFavoriteChange = (details, isFavorite) => {
    if (isFavorite) {
      setNotificationMessage(
        `Карточка "${details.name}" добавлена в избранное!`
      );
      setNotificationType("success"); // Успешное уведомление
    } else {
      setNotificationMessage(
        `Карточка "${details.name}" удалена из избранного.`
      );
      setNotificationType("info"); // Информационное уведомление
    }
    useEffect(() => {
      let timeoutId;
      if (visible && autoHideDuration > 0) {
        timeoutId = setTimeout(() => {
          setVisible(false);
          onClose?.(); // Вызываем функцию onClose
        }, autoHideDuration);
      }

      return () => {
        clearTimeout(timeoutId); // Очистка таймера при изменении состояния visible
      };
    }, [visible, autoHideDuration, onClose]); // Зависимости useEffect

    if (!visible) {
      return null; // Не отображаем, если уведомление не видимо
    }
    // Функция для очистки уведомления
    const handleNotificationClose = () => {
      setNotificationMessage(null);
    };

    let backgroundColor = ""; // переменные для фона и цвета
    let textColor = "";
    // стилизация уведомлений
    switch (type) {
      case "success":
        backgroundColor = "bg-green-500";
        textColor = "text-white";
        break;
      case "error":
        backgroundColor = "bg-red-500";
        textColor = "text-white";
        break;
    }

    return (
      <div>
        className= fixed top-4 right-4 z-50 p-4 rounded-md shadow-md $
        {backgroundColor} ${textColor}
        {message}
        {Card.map((details) => (
          <Card
            key={details.name}
            details={Card}
            onFavoriteChange={handleFavoriteChange}
          />
        ))}
        // Отображение уведомления
        {notificationMessage && (
          <Notification
            message={notificationMessage}
            type={notificationType}
            onClose={handleNotificationClose}
          />
        )}
      </div>
    );
  };
};
