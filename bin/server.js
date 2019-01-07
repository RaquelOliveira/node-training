const app = require('../src/app');
const debug = require('debug')('nodestr:serve');
const http = require('http');

const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API rodando na porta ${port}.`);

function normalizePort(val) {
    const port = parseInt(val,10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
}

function onError(error) {
    if (error.syscall != 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 
        'Pipe ' + port : 
        'Port ' + port;
    
    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'require elavated privileges');
            process.exit(1);
            break;
        case 'EADORINUSE':
            console.error(bind + 'is alredy in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port;
    debug('Listening on ' + bind);
}