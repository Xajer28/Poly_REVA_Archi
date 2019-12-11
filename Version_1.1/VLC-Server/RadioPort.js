var radioPorts = require('express').Router(),
    ejs=require('ejs'),
    fs=require('fs'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs'),
    jsdom = require('jsdom'),
    cp = require('child_process'),
    vlcCommand = require('vlc-command'),

    jsonpath = path.join(__dirname, '/', 'radios.json'),
    file=fs.readFileSync(jsonpath),
    radios=JSON.parse(file);

// A l'adresse /, on envoie le fichier index.html
radioPorts.get('/',function(request,response){
    // response.sendFile(path.resolve('./view/index.html'));
    response.render('index.ejs',{rows:radios});
});


//Récupération du lien par le port
radioPorts.post('/',function(request,response){
    // var radiotitle=radios[req.body.numeroRadio].title;
    console.log( request );
    console.log("Radio clicked");
    // console.log(radiotitle);

    // vlcCommand(function (err, cmd) {
    //     if (err) return console.error('could not find vlc command path')

    //     if (process.platform === 'win32') {
    //     cp.execFile(cmd, ['--version'], function (err, stdout) {
    //         if (err) return console.error(err)
    //         console.log(stdout)
    //     })
    //     } else {
    //     cp.exec("vlc -vvv "+notreRadio+" --sout '#transcode{vcodec=none,acodec=mp3,ab=128,channels=2,samplerate=44100,scodec=none}:http{mux=mp3,dst=:"+nextPortNumber+"/}'", function (err, stdout) {
    //         if (err) return console.error(err);
    //         console.log(stdout);
    //         console.log("Lancement de la Radio");
    //     })
    //     }
    // })

    // //Ouverture d'un port dès que la radio est sélectionnée
    // var obj = {} // empty Object
    // var key = 'PortNumber';
    // //Attribution d'un port à l'objet
    // obj[key] = RadioPortNumber;

    // (async () => {
    //     await delay(5000);
    //     res.render('radio.ejs', { rows : obj });
    //     RadioPortNumber+=1;
    // })();
});
module.exports=radioPorts;