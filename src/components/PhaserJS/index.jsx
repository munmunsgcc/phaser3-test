import React, { useEffect } from 'react';
import Phaser from 'phaser';

const PhaserJS = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 },
        },
      },
      scene: {
        preload() {
          this.load.setBaseURL('/');
          this.load.image('sky', 'sky.png');
          this.load.image('logo', 'phaser3-logo.png');
          this.load.image('red', 'red.png');
        },
        create() {
          this.add.image(400, 300, 'sky');

          const emitter = this.add.particles('red').createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD',
          });

          const logo = this.physics.add.image(400, 100, 'logo');

          logo.setVelocity(100, 200);
          logo.setBounce(1, 1);
          logo.setCollideWorldBounds(true);

          emitter.startFollow(logo);
        },
      },
    };

    const game = new Phaser.Game(config);

    return () => {
      const canvas = document.body.getElementsByTagName('canvas')[0];
      game.destroy();
      document.body.removeChild(canvas);
    };
  }, []);

  return <div />;
};

export default PhaserJS;
