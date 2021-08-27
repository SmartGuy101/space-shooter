sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.ashes, 500)
})
let MyEnemy: Sprite = null
info.setLife(3)
let MyPlayer = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(MyPlayer)
game.onUpdateInterval(1000, function () {
    MyEnemy = sprites.createProjectileFromSide(assets.image`Enemy`, 0, 50)
    MyEnemy.x = randint(32, 128)
})
