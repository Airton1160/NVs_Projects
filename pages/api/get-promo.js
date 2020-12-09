export default async (req, res) => {
    res.end(JSON.stringify({
        showCupom: true,
        message: 'Cupom de Desconto'
    }))
}