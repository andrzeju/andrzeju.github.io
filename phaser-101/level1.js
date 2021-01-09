let level1 = {
    preload: preload
};

function preload(that) {
    that.load.image('sky', 'assets/level1/background.png');
    that.load.image('podloga', 'assets/level1/podloga.png');
    that.load.image('balwanek', 'assets/level1/item.png');
    that.load.image('player', 'assets/level1/player.png');

    that.load.audio('hop', 'assets/level1/hop.mp3');
    that.load.audio('happy', 'assets/level1/happy.mp3');
    that.load.audio('back', 'assets/level1/back.mp3');
}

window.PhaserGame.level1 = level1
