import { Request, Response } from 'express';
import { getVGameCompanyInfoService } from '../../services/igdb/igdbCompanyService';


export const getVGameCompanyInfo = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params
    const company = await getVGameCompanyInfoService(slug)
    if (company.result.length === 0)  return res.status(404).json({error: 'Company not found'})
    res.status(200).json(company.result[0])
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error})
  }
}
