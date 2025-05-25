const API_BASE_URL = 'http://127.0.0.1:8000';

export async function fetchCars() {
  const response = await fetch(`${API_BASE_URL}/cars/`);
  if (!response.ok) throw new Error('Ошибка при получении машин');
  return await response.json();
}

export async function fetchFilterOptions() {
  const res = await fetch(`${API_BASE_URL}/cars/filter-options/`);
  if (!res.ok) throw new Error("Ошибка при получении фильтров");
  return res.json();
}

export const fetchFilteredCars = async (filters = {}) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, values]) => {
    if (!values || values.length === 0) return;
    values.forEach((val) => params.append(key, val));
  });

  const response = await fetch(`${API_BASE_URL}/cars/?${params.toString()}`);
  if (!response.ok) throw new Error("Ошибка при получении фильтрованных машин");
  return await response.json();
};

export function getApiURL() {
    return API_BASE_URL
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Ошибка авторизации");
    }

    return true;
  } catch (error) {
    throw new Error(error.message || "Сервер недоступен");
  }
}

// Api.js

export async function getMe() {
  try {
    console.log("Sending GET /auth/me with credentials");
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: "GET",
      credentials: "include", // Отправляет куки
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", [...response.headers]);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("getMe data:", data);
    return data;
  } catch (error) {
    console.error("getMe error:", error.message);
    return null;
  }
}

export async function fetchContacts() {
  const response = await fetch(`${API_BASE_URL}/reference/contacts`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить контакты");
  }

  return response.json();
}
