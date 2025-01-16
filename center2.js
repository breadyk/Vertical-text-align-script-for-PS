#target photoshop
app.bringToFront();

function alignTextVerticallyCenterWithinLayer() {
    var doc = app.activeDocument;
    var layer = doc.activeLayer;

    if (layer.kind != LayerKind.TEXT) {
        alert('Выберите текстовый слой.');
        return;
    }
    var textHeight = layer.bounds[3].as('px') - layer.bounds[1].as('px');
    var oldX = layer.bounds[0];

    layer.translate(0, ((layer.textItem.height.as('px') - textHeight) / 2) - (layer.bounds[1].as('px') - layer.textItem.position[1].as('px')));

    var textWidth = layer.textItem.width; //Сохраняет оригинальную ширину блока
    //var textWidth = layer.bounds[2].as('px') - layer.bounds[0].as('px'); //Ширина блока примерно равна ширине текста

    layer.textItem.kind = TextType.POINTTEXT;

    textHeight = layer.bounds[3].as('px') - layer.bounds[1].as('px');
    
    layer.textItem.kind = TextType.PARAGRAPHTEXT;
    layer.textItem.height = textHeight;
    layer.textItem.width = textWidth;
    layer.translate(-(layer.bounds[0]-oldX), 0);
}
alignTextVerticallyCenterWithinLayer();
