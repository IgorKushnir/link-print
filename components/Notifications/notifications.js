import { store } from 'react-notifications-component';

export const createNotification = (title, type, text) => {
    store.addNotification({
        title: title,
        message: text,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
}