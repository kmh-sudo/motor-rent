import api from "../api/api";

export async function fetchMotors() {
  try {
    const res = await api.get("/api/bikes");
    console.log(res.data, "res");
    return res.data;
  } catch (error) {
    console.error("Error fetching bikes:", error);
    return [];
  }
}

