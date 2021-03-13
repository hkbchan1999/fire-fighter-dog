controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(assets.image`water`, firedog, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let fire: Sprite = null
let water: Sprite = null
let firedog: Sprite = null
firedog = sprites.create(assets.image`firedog`, SpriteKind.Player)
controller.moveSprite(firedog, 0, 100)
firedog.setStayInScreen(true)
firedog.setPosition(15, 60)
scene.setBackgroundColor(7)
game.onUpdateInterval(5, function () {
    fire = sprites.create(assets.image`fire`, SpriteKind.Enemy)
    fire.setPosition(160, randint(0, 120))
    fire.setVelocity(-50, 0)
})
