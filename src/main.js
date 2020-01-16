import string from './css'
const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
let n = 1
let time = 0
let id
const player = {
    init: () => {
        id = player.play()
        demo.innerHTML = string.substr(0, n)
        demo2.innerText = string.substr(0, n)
        document.querySelector('#bofan').onclick = () => {
            player.pause(), player.play()
        }
        player.bindEvents()
    },
    bindEvents: () => {
        const hashtable = {
            '#zanting': player.pause,
            '#mansu': player.solw,
            '#zhongsu': player.normal,
            '#kuaisu': player.fast
        }
        for (let key in hashtable) {
            document.querySelector(key).onclick = hashtable[key]
        }
    },
    a: () => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        demo.innerHTML = string.substr(0, n)
        demo2.innerText = string.substr(0, n)
        demo2.scrollTop = demo2.scrollHeight
    },
    play: () => {
        return id = setInterval(player.a, time)
    },
    pause: () => {
        window.clearInterval(id)
    },
    solw: () => {
        player.pause()
        time = 100
        player.play()
    },
    normal: () => {
        player.pause()
        time = 50
        player.play()
    },
    fast: () => {
        player.pause()
        time = 0
        player.play()
    }
}
player.init(0)
