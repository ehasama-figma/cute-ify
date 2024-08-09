

const nodes: SceneNode[] = [];

figma.loadAllPagesAsync() // ensures all PageNodes are loaded, can be slow in very large files

const textNodes = figma.currentPage.findAll(node => {
  return node.type === "TEXT" 
})

const cute_fonts = [{
  family: 'Kiwi Maru',
  style: 'Regular'
},
{
  family: 'La Belle Aurore',
  style: 'Regular'
},
{
  family: 'Martel',
  style: 'Regular'
}]

const cute_colors = [{
  r: 0.51,
  g: 0,
  b: 0.51,
}, {
  r: 1,
  g: 0.07,
  b: 0.57,
}, {  
  r: 0.25,
  g: 0.41,
  b: 1,
}]

// get random cute color
const random_color = cute_colors[Math.floor(Math.random() * cute_colors.length)];
// get random cute font
const cute_font = cute_fonts[Math.floor(Math.random() * cute_fonts.length)];

changeText(cute_font, random_color)

async function changeText(font: FontName, fontColor: RGB) {
  try {
    await figma.loadFontAsync(font);
    for (const textNode of textNodes) {
      // change text font to a cute font
      (textNode as TextNode).fontName = font;
      // change text color to a cute color
      (textNode as TextNode).fills = [{type: 'SOLID', color: fontColor}];
    }

      figma.closePlugin();
  } catch(err) {
    console.error(`Error: ${err}`);

  }
}

// Get all shapes in the current page
const shapes = figma.currentPage.findAll(node => {
  return node.type === "RECTANGLE" 
})

changeShapeColor(random_color)

async function changeShapeColor(shapeColor: RGB) {
  for (const shape of shapes) {
    (shape as RectangleNode).fills = [{type: 'SOLID', color: shapeColor}];
    (shape as RectangleNode).cornerRadius = 20;
  }

}




