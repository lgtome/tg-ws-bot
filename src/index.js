require('./helpers/fix_tg_bot_issue')
require('dotenv').config()
const TG_BOT = require('node-telegram-bot-api')
const token = process.env.TOKEN
const bot = new TG_BOT(token, { polling: true })
const express = require('express')
const { generateId } = require('./helpers')
const app = express()
const WS = require('express-ws')(app)
const PORT = process.env.PORT || '8080'
const template = `
  <ul class='list'>
    
  </ul>
  <script>
    (() => {
      const list = document.querySelector('.list')
      const appendItem = document.createElement('code')
      const ws = new WebSocket('ws://localhost:${PORT}')
      ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data)
        appendItem.innerText = ''
        for(let i = 1;i<=Object.keys(data).length;i++){
          appendItem.innerHTML += data[i].username
          appendItem.innerHTML += '  -----> '
          appendItem.innerHTML += data[i].text
          appendItem.appendChild(document.createElement('br'))
        }
        list.appendChild(appendItem)
      }
    })()
</script>
`

const db = {}
const counter = generateId()

app.use(express.json())

bot.onText(/[\S]/, (msg, match) => {
    console.log('message from bot: ', msg, '✨')
    const { id, username } = msg.from
    const { text } = msg
    db[counter.generateNextId()] = { id, username, text }
    const [first] = WS.getWss().clients
    first.send(JSON.stringify(db))
})

app.ws('/', (ws, req) => {})

app.get('/', (req, res) => {
    res.send(template)
})

app.listen(PORT, () => {
    console.log(`server started ✨ on port: ${PORT}`)
})
