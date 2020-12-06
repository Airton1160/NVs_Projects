const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1DkpY0Jsl9lDri-cJUi_eSymI9l3sLPwLERxqvx0GhwU')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')
        console.log(sheet.title)
        const cell = sheet.getCell(1, 0)
        console.log(cell.value)
        const textcell = sheet.getCell(1, 1)
        console.log(textcell.value)

    } catch (err) {
        console.log(err)
    }
}
run()