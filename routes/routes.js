// import other routes
const userRoutes = require('./usersRoutes');

const appRouter = (app, fs) => {

    // default route
    // app.get('/', (req, res) => {
    //     res.send('welcome to my 1st api-server');
    // });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;