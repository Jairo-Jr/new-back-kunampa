const {handleHttpError} = require("../utils/handleError");

/**
 * Array con los roles permitidos
 * @returns {(function(*, *, *): void)|*}
 * @param roles
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const {user} = req;
        console.log('user: ', {user});
        const rolesByUser = user.role;
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
        if (!checkValueRol){
            handleHttpError(res, 'USER_PERMISSIONS', 403);
            return
        }
        next();
    } catch (e) {
        handleHttpError(res, 'ERROR_PERMISSIONS', 403);
    }
}

module.exports = checkRol;
// https://youtu.be/xRXHQlqA3Ak?t=18539
