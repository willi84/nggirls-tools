var regexEmail = /(email|e-mail)/ig;
var regexStatus = /free/i;

function getEmailColumn(sheet){
  return getColumnByContext(sheet, regexEmail, true);
}
function getStatusColumn(sheet){
  return getColumnByContext(sheet, regexStatus, false);
}
  
function getColumnByContext (sheet, regex, multiple){
  var labels =   sheet.getDataRange().getValues()[0];
  Logger.log(labels);

  var index = -1;
  var currentCol = sheet.getActiveCell().getColumn()-1;
  Logger.log("cc: "+currentCol);
  Logger.log(regex);
  
  // get column by regex
  for (var i = 0; i < labels.length; i++) {
    if(labels[i].match(regex) !==  null){
      Logger.log(labels[i].match(regex));
      
      if(!multiple){
        Logger.log("i1: " + i + " | " + "currentCol: " + currentCol + " | " + "index: "+ index);
        index = i;
      } else {
        if(i > currentCol && index === -1){
          Logger.log("i2: " + i + " | " + "currentCol: " + currentCol + " | " + "index: "+ index);
          index = i;
        }
      }
    }
  }
  Logger.log("=> index: " + index);
  return index;
}