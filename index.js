let AWS = require("aws-sdk");
let fs = require("fs");
let Polly = new AWS.Polly({
  region: "us-east-1",
});
let input = {
  Text: "Oi meu nome é Isadora",
  OutputFormat: "mp3",
  VoiceId: "Camila",
  LanguageCode: "pt-BR",
};
Polly.synthesizeSpeech(input, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  if (data.AudioStream instanceof Buffer) {
    fs.writeFile("hello.mp3", data.AudioStream, (fsErr) => {
      if (fsErr) {
        console.error(fsErr);
        return;
      }
      console.log("Success");
    });
  }
});

