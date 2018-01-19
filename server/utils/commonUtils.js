let exports1 = module.exports = {};

exports1.setupResponse = function setupResponse(code, message, result) {
    var response = {
        statusCode: code,
        statusMsg: message
    };

    if (result) {
        response["result"] = result;
    }
    return response
};