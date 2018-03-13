var express = require('express')
var app = express()
var server = app.listen(3000)
var io = require('socket.io')(server)



app.use(express.static(__dirname + '/'))

app.get('/', function(req, res){
    res.sendFile(__dirname + './index.html')
})

io.on('connection', (socket) => {
    console.log('a user connected')
    console.log('socket', socket.id)

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
            console.log('message: ' + msg)

    socket.on('disconnect', (msg) => {
        console.log('user disconnected')

        })
    });
});