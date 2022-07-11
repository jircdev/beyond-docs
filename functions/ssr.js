exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSon.stringify({
            message: 'test julio'
        })
    }
}
