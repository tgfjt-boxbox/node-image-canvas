const fs = require('fs');
const Konva = require('konva-node');
const { loadImage } = require('canvas');

async function main() {
  const stage = new Konva.Stage({ width: 480, height: 480 });
  const layer = new Konva.Layer();

  stage.add(layer);

  const image = await loadImage('https://www.placecage.com/800/800')

  const imageElement = new Konva.Image({
    image,
    x: 120,
    y: 120,
    width: 240,
    height: 240,
    brighten: 5,
  });

  imageElement.cache();
  layer.add(imageElement);
  layer.draw();

  fs.writeFileSync('sample.png', layer.getCanvas()._canvas.toBuffer());
}

main();