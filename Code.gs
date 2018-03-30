
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
  var indexRSVPStatus = getStatusColumn(sheetRSVP);
  var indexEmail = getEmailColumn(sheetRSVP);
  
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
  
  
  var activeEmail =  dataCurrent[activeRow][getEmailColumn(sheet)];
  activeEmail = activeEmail.toString().replace(" ", "").toLowerCase();
  var indexActiveEmail = arrayEmails.indexOf(activeEmail);
  var dataSet = dataRSVP[indexActiveEmail]
  var statusEmail = dataSet && dataSet[indexRSVPStatus] ? dataSet[indexRSVPStatus] : "no response";
  
  return statusEmail;
 
}