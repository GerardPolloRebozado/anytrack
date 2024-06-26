import Cookies from "js-cookie"
import { loginForm, signupForm } from "libs/types/src"

export async function createUser(data: signupForm) {
    const response = await fetch('/api/v1/users/signup', {
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
    const response = await fetch('/api/v1/users/signin', {
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
  const response = await fetch('/api/v1/users', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`
    },
  })
  return {
    status: response.status,
    body: await response.json()
  }
}
