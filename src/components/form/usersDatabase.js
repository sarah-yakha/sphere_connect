import { getDatabase, ref, set, get } from "firebase/database";

export default async function writeUsers(newUser) {
    
  const db = getDatabase();
  const userRef = ref(db, "Profile/users");

  try {
    // Получаем существующие сообщения
    const snapshot = await get(userRef);
    const existingUsers = snapshot.val() || [];

    // Добавляем новое сообщение к существующим
    const updatedUsers = [...existingUsers, newUser];

    console.log(updatedUsers);
    // Обновляем данные в базе с помощью set
    await set(userRef, updatedUsers);

    console.log("Пользователь добавлен");
  } catch (error) {
    console.error("Ошибка при обновлении:", error);
  }

  
}
