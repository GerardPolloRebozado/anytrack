import { bearerToken } from './igdbAuth';
import igdb from 'igdb-api-node';

export const getVGameCompanyInfoService = async (slug: string) => {
  await bearerToken.checkToken();
  const query = igdb()
    .query('companies', 'companies-expanded')
    .fields(['description', 'name', 'slug', 'logo', 'logo.image_id', 'country', 'start_date', 'websites', 'developed', 'developed.name', 'developed.cover.image_id'])
    .where(`slug = "${slug}"`);
  const res = await igdb().multi([query]).request('/multiquery')
  return res.data[0];
}
