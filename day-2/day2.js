const fs = require('fs')

const input = fs.readFileSync("./input.txt", "utf-8").split("\n")

    const available = {
        red: 12,
        green: 13,
        blue: 14
    }

    const goodGame = []
    const gameRequirements = {}

    input.forEach(line => {
        const [game, config] = line.split(':').map(x => x.trim())
        const gameId = Number(game.split(' ').at(1))
        gameRequirements[gameId] = {
            red: 0,
            green: 0,
            blue: 0
        }

        const subGames = config.split(';').map(x => x.trim())

        subGames.forEach(sg => {
            const colorConfig = sg.split(', ')
            colorConfig.forEach(cc => {
                const [amount, color] = cc.split(' ')
                const numAmount = Number(amount)
                if (numAmount >= gameRequirements[gameId][color]) {
                    gameRequirements[gameId][color] = numAmount
                }
            })
        })

        if (gameRequirements[gameId].red > available.red &&
            gameRequirements[gameId].green > available.green &&
            gameRequirements[gameId].blue > available.blue) goodGame.push(gameId)
    })

        const sum = goodGame.reduce((a,b) => { a + b }, 0)
        console.log(goodGame)
        console.log(sum)
