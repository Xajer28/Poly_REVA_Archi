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

const delay = require('delay');

var Port_Radio_Play=8085;

// A l'adresse /, on envoie le fichier index.html
radioPorts.get('/',function(request,response){
    // response.sendFile(path.resolve('./view/index.html'));
    response.render('index.ejs',{rows:radios});
});

//Récupération du lien par le port
radioPorts.get('/radio',function(request,response){
    // var radiotitle=radios[req.body.numeroRadio].title;
    var link_radio = request.query.link;
    console.log(link_radio);
    vlcCommand(function (err, cmd) {
        if (err) return console.error('could not find vlc command path')
        if (process.platform === 'win32') {
        cp.execFile(cmd, ['--version'], function (err, stdout) {
            if (err) return console.error(err)
            console.log(stdout)
        })
        } else {
        cp.exec("vlc -vvv "+link_radio+" --sout '#transcode{vcodec=none,acodec=mp3,ab=128,channels=2,samplerate=44100,scodec=none}:http{mux=mp3,dst=:"+Port_Radio_Play+"/}'", function (err, stdout) {
            if (err) return console.error(err);
            console.log(stdout);
            console.log("Lancement de la Radio");
        })
        }
    })
    
    var o = {} // empty Object
    var key = 'PortNumber';
    o[key] = Port_Radio_Play;
    (async () => {
        await delay(5000);
        response.json(o);
        Port_Radio_Play+=1;
    })();
    console.log("Service Opened on http://127.0.0.1:"+Port_Radio_Play+"/");
    
});
module.exports=radioPorts;