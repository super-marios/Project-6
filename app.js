const express = require('express');
const path = require('path');

const app = express();

//sets middleware to use pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//this serves files like img and js to the browser ( url add /static )
app.use('/static', express.static('public'));

//modular routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

//error handlers
app.use((err, req, res, next)=>{
    res.locals.error = err;
    res.status(err.status);
    console.log(err.message);
    res.render('error');
});

app.listen(3000, ()=> {
    console.log('App is listening on port 3000');
})