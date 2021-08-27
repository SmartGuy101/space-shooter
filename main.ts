controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerProjectile = sprites.createProjectileFromSprite(assets.image`Electric-Shock`, MyPlayer, 0, -100)
    pause(Firerate)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 100)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.ashes, 100)
    MyPlayer.startEffect(effects.fire, 500)
})
let Enemies: Sprite[] = []
let MyEnemy: Sprite = null
let PlayerProjectile: Sprite = null
let Firerate = 0
let MyPlayer: Sprite = null
MyPlayer = sprites.create(assets.image`Player`, SpriteKind.Player)
Firerate = 500
let Enemy_Speed = 50
let Enemy_Spawn_Delay = 5000
info.setLife(3)
info.setScore(0)
controller.moveSprite(MyPlayer)
MyPlayer.setStayInScreen(true)
forever(function () {
    MyEnemy = sprites.createProjectileFromSide(assets.image`Enemy`, 0, Enemy_Speed)
    MyEnemy.x = randint(32, 128)
    MyEnemy.setKind(SpriteKind.Enemy)
    pause(Enemy_Spawn_Delay)
})
forever(function () {
    if (Enemy_Spawn_Delay > 1) {
        Enemy_Spawn_Delay += -10
        pause(100)
    }
})
forever(function () {
    Enemies = sprites.allOfKind(SpriteKind.Enemy)
})
forever(function () {
    for (let value of Enemies) {
        if (value.y > 120 && info.score() > 0) {
            info.changeScoreBy(-1)
            value.destroy()
        }
    }
})
forever(function () {
    if (Enemy_Speed < 150) {
        Enemy_Speed += 1
        pause(2000)
    }
})
forever(function () {
    effects.starField.startScreenEffect(100)
})
