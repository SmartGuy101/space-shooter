controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerProjectile = sprites.createProjectileFromSprite(assets.image`Electric-Shock`, MyPlayer, 0, -100)
    pause(Firerate)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 100)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.ashes, 100)
    MyPlayer.startEffect(effects.fire, 500)
})
let MyEnemy: Sprite = null
let PlayerProjectile: Sprite = null
let Firerate = 0
let MyPlayer: Sprite = null
MyPlayer = sprites.create(assets.image`Player`, SpriteKind.Player)
Firerate = 500
info.setLife(3)
controller.moveSprite(MyPlayer)
MyPlayer.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    MyEnemy = sprites.createProjectileFromSide(assets.image`Enemy`, 0, 50)
    MyEnemy.x = randint(32, 128)
    MyEnemy.setKind(SpriteKind.Enemy)
})
forever(function () {
    effects.starField.startScreenEffect(100)
})
