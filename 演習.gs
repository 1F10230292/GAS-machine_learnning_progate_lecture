function sendEmails() {
  // スプレッドシートを取得して、変数spreadSheetに入れてください
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();

  // 「送信者リスト」というシートを取得して、変数sheetに入れてください
  var sheet = spreadSheet.getSheetByName("送信者リスト");
 
  
  // スプレッドシートのA列からB列の範囲を指定して、変数dataRangeに入れてください
  var dataRange = sheet.getRange("A:B");
  
  // 指定した範囲の値を取得して、変数dataに入れてください
  var data = dataRange.getValues();
  console.log(data);
  
  // 値の最終行数を取得して、変数countに入れてください
  var count = sheet.getDataRange().getLastRow();

  
  // 変数nameとemailAddressを定義して、空文字を入れてください
  var name = "";

  var emailAddress = "";
  // 変数iを使って繰り返し処理を書いてください。なお、繰り返しの回数には、最終行数が入った変数countを使ってください
  for(var i = 0; i < count;i++){
    // 変数dataから名前とメールアドレスを取得して、それぞれ変数nameとemailAddressに入れてください
    console.log(i);

    var name = data[i][0];
    var emailAddress = data[i][1];

    console.log(name, emailAddress);


    // 「こんにちは、〇〇さん。イベントのご参加お待ちしております。」となるように変数bodyに入れてください。なお〇〇の部分に変数nameの値が入るように文字列を結合してください
    var body = "こんにちは"+ name + "さん。 甘酢が待ち遠しいです。";
    // GmailAppのsendEmail関数を呼び出してください。引数には順番に変数emailAddress、「イベントご参加のリマインド」という件名、変数bodyを指定してください
    GmailApp.sendEmail(emailAddress, "イベント参加のリマインド", body);
  };
}