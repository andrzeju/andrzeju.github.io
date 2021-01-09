let level2 = {
    preload: preload
};

function preload(that) {
    that.load.image('sky', 'assets/level2/background.png');
    that.load.image('podloga', 'assets/level2/podloga.png');
    that.load.image('balwanek', 'assets/level2/item.png');
    that.load.image('player', 'assets/level2/player.png');

    that.load.audio('hop', 'assets/level2/hop.mp3');
    that.load.audio('happy', 'assets/level2/happy.mp3');
    that.load.audio('back', 'assets/level2/back.mp3');
}

window.PhaserGame.level2 = level2
