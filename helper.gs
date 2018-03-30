var regexEmail = /(email|e-mail)/i;
var regexStatus = /free/i;

function getEmailColumn(sheet){
  return getColumnByContext(sheet, regexEmail);
}
function getStatusColumn(sheet){
  return getColumnByContext(sheet, regexStatus);
}
  
function getColumnByContext (sheet, regex){
  var labels =   sheet.getDataRange().getValues()[0];
  var index = -1;
  
  // get column by regex
  for (var i = 0; i < labels.length; i++) {
    if(labels[i].match(regex) !==  null){
      index = i;
    }
  }
  return index;
}