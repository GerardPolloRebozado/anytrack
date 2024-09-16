import { setting } from "@anytrack/types";
import Cookies from "js-cookie";

export async function getSettings() {
  const response = await fetch("/api/v1/setting", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  });
  return {
    status: response.status,
    body: await response.json() as setting,
  };
};
export async function updateSettings(data: Omit<setting, "userId">) {
  const response = await fetch("/api/v1/setting", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(data),
  });
  return {
    status: response.status,
    body: await response.json(),
  };
};
