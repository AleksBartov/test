const AuthenticationController = require('../src/controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/register', AuthenticationController.register);
}