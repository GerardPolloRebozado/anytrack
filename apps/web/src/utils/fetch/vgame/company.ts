'use server'
import { cookies } from 'next/headers';

export async function getCompanyBySlug(slug: string) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  return await fetch(`http://localhost:3001/api/v1/igdb/company/${slug}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
}
