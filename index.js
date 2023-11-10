//conectar Express

const {app, port} = require('./src/app');
const {connection} = require('./src/db');

connection().then(
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
 );