var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var podlogi;
var balwanki;
var cursors;
var hop;
var balwankiCount = 11;

var game = new Phaser.Game(config);

let mute = false;

function preload () {
  window.PhaserGame.level2.preload(this);
}

function create () {
    this.add.image(600, 400, 'sky');
    // this.add.image(80, 157, 'balwanek');
   
    balwanki = this.physics.add.group({
        key: 'balwanek',
        repeat: balwankiCount,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    balwanki.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    podlogi = this.physics.add.staticGroup();
    podlogi.create(0, 500, 'podloga');
    podlogi.create(750, 400, 'podloga');
    podlogi.create(100, 200, 'podloga');
    podlogi.create(700, 550, 'podloga');
    podlogi.create(400, 500, 'podloga');
    podlogi.create(400, 300, 'podloga');
    podlogi.create(780, 150, 'podloga');

    podlogi.create(100, 700, 'podloga');
    podlogi.create(300, 700, 'podloga');
    podlogi.create(500, 700, 'podloga');
    podlogi.create(700, 700, 'podloga');
    podlogi.create(900, 700, 'podloga');
    podlogi.create(1100, 700, 'podloga');

    player = this.physics.add.image(50, 450, 'player');
    player.setScale(0.5);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, podlogi);
    this.physics.add.collider(balwanki, podlogi);
    this.physics.add.overlap(player, balwanki, zbierzBalwanka, null, this);

    cursors = this.input.keyboard.createCursorKeys();

    this.sound.add('hop');
    this.sound.add('happy');
    let back = this.sound.add('back');
     
    back.play({
        volume: .3,
        loop: true
    })
}

function update () {
    if (cursors.left.isDown){
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(300);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
        if (!mute) {
            this.sound.play('hop');
            mute = true;
            setTimeout(function(){
                mute = false;
            }, 1000);    
        }
    }
}

function zbierzBalwanka(player, balwanek)
{
    balwanek.disableBody(true, true);
    balwankiCount--;
    if (balwankiCount < 0) {
        this.sound.play('happy');
    }
}
