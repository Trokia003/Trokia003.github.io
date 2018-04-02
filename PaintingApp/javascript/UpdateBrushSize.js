/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function updateBrushSize()
{
    //get the brush size as inputted by user
    var brushSizeTextBox = document.getElementById("brushSizeNumberForm");
    var paintBrushSize = brushSizeTextBox.value;
    
    //now make sure that the brush size is valid (min = 1, max = 25)
    if(paintBrushSize < 1)
    {
        alert("The given brush size is too small. Defaulted to 1");
        brushSizeTextBox.value = 1;
    }
    else if(paintBrushSize > 25)
    {
        alert("The given brush size is too big. Defaulted to 25");
        brushSizeTextBox.value = 25;
    }
}
