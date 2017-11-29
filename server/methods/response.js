var exports = module.exports = {};

exports.setupResponse = function setupResponse(code, message, result) {
    var response = {
        statusCode: code,
        statusMsg: message
    };

    if (result) {
        response["result"] = result;
    }
    return response
};
