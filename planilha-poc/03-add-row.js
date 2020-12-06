const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1DkpY0Jsl9lDri-cJUi_eSymI9l3sLPwLERxqvx0GhwU')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[1]
        await sheet.addRow({
            Nome: 'Airton Diniz',
            Email: 'airton@dev.com',
            Whatsapp: '32190891',
            Cupom: 'cup10',
            Promocao: 'promo'
        })




    } catch (err) {
        console.log(err)
    }
}
run()
