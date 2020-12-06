const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1DkpY0Jsl9lDri-cJUi_eSymI9l3sLPwLERxqvx0GhwU')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

    } catch (err) {
        console.log(err)
    }
}
run()
