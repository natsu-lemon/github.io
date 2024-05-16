AFRAME.registerComponent('soundhandler', {
    tick: function () {
        var entity = document.querySelector('[sound]');
        if (document.querySelector('a-marker').object3D.visible === true) {
            entity.components.sound.playSound();
        } else {
            entity.components.sound.pauseSound();
        }

    }
});