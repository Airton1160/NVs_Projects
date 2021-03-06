import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')

        const cell = sheet.getCell(1, 0)
        const textcell = sheet.getCell(1, 1)

        res.end(JSON.stringify({
            showCupom: cell.value === 'VERDADEIRO',
            message: textcell.value
        }))
    } catch (err) {
        res.end(JSON.stringify({
            showCupom: false,
            message: ''
        }))
    }
}