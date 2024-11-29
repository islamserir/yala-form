function doGet() {
  return ContentService.createTextOutput('The web app is running correctly.');
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.firstName,
    data.lastName,
    data.email,
    data.phone
  ]);
  
  sendEmailNotification(data);
  
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'success',
    'row': sheet.getLastRow()
  })).setMimeType(ContentService.MimeType.JSON);
}

function sendEmailNotification(data) {
  MailApp.sendEmail({
    to: "your.actual@email.com",
    subject: "New YALA Registration Form Submission",
    body: `New registration from ${data.firstName} ${data.lastName}\n
           Email: ${data.email}\n
           Phone: ${data.phone}`
  });
} 