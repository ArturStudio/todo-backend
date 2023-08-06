require('dotenv').config({
    path: `.${process.env.NODE_ENV}.env`
})

const Express = require('express');
const app = new Express();

const cors = require('cors');

const PORT = process.env.PORT || 5000;

app
    .use(cors())
    .use('/api', require('./router/index'))
    .use(require('./middle-ware/error'));

const start = async (PORT) => {
    await app.listen(PORT, () => {
        console.log('api success start');
    })
}

start(PORT)