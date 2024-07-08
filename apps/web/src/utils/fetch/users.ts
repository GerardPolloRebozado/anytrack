import Cookies from "js-cookie"
import { loginForm, signupForm, updateUserForm } from "libs/types/src"

export async function createUser(data: signupForm) {
  const response = await fetch('/api/v1/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return {
    status: response.status,
    body: await response.json()
  }
}

export async function loginUser(data: loginForm) {
  const response = await fetch('/api/v1/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return {
    status: response.status,
    body: await response.json()
  }
}

export async function getUser() {
  return await fetch('/api/v1/user', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}


export async function updateUser(data: updateUserForm) {
  if (data.email === '') delete data.email
  if (data.name === '') delete data.name
  if (data.password === '') delete data.password
  return await fetch('/api/v1/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(data)
  })
}
