
function getRSVP() {
  var nameSheetRSVP = "RSVP(participants)";
  var nameParticipants = "participants form";
  var nameEmail = "Your e-mail address:";
  var nameRSVPStatus = "";
  var sheet = SpreadsheetApp.getActiveSheet();
  var sheetRSVP = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nameSheetRSVP);
  var sheetParticipants = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nameParticipants);
  var labels =   sheetParticipants.getDataRange().getValues()[0];
  var labelsRSVP = sheetRSVP.getDataRange().getValues()[0];
  var labelsCurrent = sheet.getDataRange().getValues()[0];
  var indexRSVPStatus = getStatusColumn(sheetRSVP);
  var indexEmail = getEmailColumn(sheetRSVP);
  
  Logger.log("rsvp: "+indexRSVPStatus);
  Logger.log("email: "+indexEmail);
  
  
  var cellEmail = labels.indexOf(nameEmail)
  
  var dataParticipants = sheetParticipants.getDataRange().getValues();
  var dataRSVP = sheetRSVP.getDataRange().getValues();
  var dataCurrent = sheet.getDataRange().getValues();
  var arrayEmails = [];
  for (var i = 0; i < dataRSVP.length; i++) {
    var email = dataRSVP[i][1];
    email = email.replace(" ", "").toLowerCase();
    arrayEmails.push(email);
  }
  var activeRow = SpreadsheetApp.getActiveSpreadsheet().getActiveCell().getRowIndex()-1;
  var activeColumn = getEmailColumn(sheet);
  var activeEmail =  dataCurrent[activeRow][activeColumn];
  if(activeEmail === ''){
   return ""; 
  }
  activeEmail = activeEmail.toString().replace(" ", "").toLowerCase();
  
  var indexActiveEmail = arrayEmails.indexOf(activeEmail);
  Logger.log("iea: "+activeEmail);
  
  var dataSet = dataRSVP[indexActiveEmail];
  if(dataSet !== undefined){
    
  Logger.log(dataSet.toString());
  //Logger.log(dataSet[indexRSVPStatus]);
  //return dataSet.length();
  
  
  Logger.log(indexRSVPStatus);
  var statusEmail = dataSet && dataSet[indexRSVPStatus] ? dataSet[indexRSVPStatus] : "no response!";
  return statusEmail;
  } else {
   return "no response"; 
  }
 
}