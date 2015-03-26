/* Extract First Page. */

if (numPages > 1) {
  var newPath = this.path.split("/");
  newPath[newPath.length -1] = "solo_" + newPath[newPath.length -1];
  
  this.saveAs(newPath.join("/")); 
  
  this.deletePages({nStart:1, nEnd: this.numPages - 1});
  
  app.execMenuItem("Save");
}