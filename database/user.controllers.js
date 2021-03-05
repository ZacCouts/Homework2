var UserService = require('../database/user.services')

exports.getUsers = async function (req, res, next) {
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;

    try {
        await action();
    } catch (e) {
        response.sendStatus(
            e.code === 11000
            || e.stack.includes('ValidationError')
            || (e.reason !== undefined && e.reason.code === 'ERR_ASSERTION')
                ? 400 : 500,
        );
}