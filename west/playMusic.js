window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();


const audioElement = document.querySelector("audio");
// Web Audio API内で使える形に変換
const track = ctx.createMediaElementSource(audioElement);

// artoolkitのコンテキストを作成
var arToolkitContext = new THREEx.ArToolkitContext();


// ARフレームワークによって提供されるイベントハンドラーを定義
arToolkitSource.onResize = function() {
    arToolkitSource.onResizeElement();
    arToolkitSource.copyElementSizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
        arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
    }
};

// ARフレームワークによって提供されるコールバックを定義
arToolkitContext.arController.addEventListener('markerFound', function(event) {
    // マーカーが見つかったときの処理
    if (event.data.markerId === 'shige') {
        // #shigeマーカーが認識されたときの処理をここに記述する
        if (ctx.state === "suspended") {
            ctx.resume();
        }
  	// 出力につなげる
  	track.connect(ctx.destination);
  	audioElement.play();
    }
});

arToolkitContext.arController.addEventListener('markerLost', function(event) {
    // マーカーが見失われたときの処理
    if (event.data.markerId === 'shige') {
        // #shigeマーカーが見失われたときの処理をここに記述する
        audioElement.pause();
    }
});
