import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get } from "firebase/database";

export default async function writeUserData(newMessage) {
  const db = getDatabase();
  const messagesRef = ref(db, "messagesData/messages");

  try {
    // Получаем существующие сообщения
    const snapshot = await get(messagesRef);
    const existingMessages = snapshot.val() || [];

    // Добавляем новое сообщение к существующим
    const updatedMessages = [...existingMessages, newMessage];

    console.log(updatedMessages);
    // Обновляем данные в базе с помощью set
    await set(messagesRef, updatedMessages);

    console.log("Сообщение успешно добавлено");
  } catch (error) {
    console.error("Ошибка при обновлении:", error);
  }

  
}
