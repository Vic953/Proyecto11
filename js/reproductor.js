window.addEventListener('DOMContentLoaded', event => {
/* Reproductor */

    //boleanos de comprobación
    let enRepro = false;
    let max = false;
    let subsEnable = true;
    let ocultoOnOff = false;
    let luz = true;
    //Obtención de recipientes
    let fondo = document.getElementById('portfolioModal1');
    let fondo2 = document.getElementById('portfolioModal2');
    let repro = document.getElementById('video');
    let botonera = document.getElementById('caja');
    let cRepro = document.getElementById('cajaRepro');
    //Elementos
    let play = document.getElementById('play');
    let masTime = document.getElementById('avanza');
    let menosTime = document.getElementById('retrocede');
    let velo = document.getElementById('velocidad');
    let volumen = document.getElementById('vol');
    let loop = document.getElementById('loopb');
    let maximizar = document.getElementById('aum');
    let subst = document.getElementById('subs');
    let textSubs = document.getElementById('subsEs');
    let luces = document.getElementById('bombi');
    let bLuces = document.getElementById('bluz');
    //Otros
    let iconoPlay = document.getElementById('reproPlay');

    


    let ocult = document.getElementById('ojo');
    let bOcult = document.getElementById('botonOcult');

    repro.volume = 0;
    repro.loop = false;

    //Botón de play/pausa
    play.addEventListener('click', reproducir => {
        if (enRepro == false) {
            repro.play();
            enRepro = true;
        } else {
            repro.pause();
            enRepro = false;
        }
    });
    //Aumento de velocidad de reproducción
    velo.addEventListener('change', aumentarVel => {
        if (velo.value == "x0.5") {
            repro.playbackRate = 0.5;
        }
        if (velo.value == "x1") {
            repro.playbackRate = 1;
        }
        if (velo.value == "x1.5") {
            repro.playbackRate = 1.5;
        }
        if (velo.value == "x2") {
            repro.playbackRate = 2;
        }
    });
    //Conjunto de botones de avanzar y retroceder en el time del video.
    masTime.addEventListener('click', anvanzarTime => {
        repro.currentTime += 10;
    });
    menosTime.addEventListener('click', retrocederTime => {
        repro.currentTime -= 10;
    });

    //Botón para desactivar o activar los subtitulos generados.
    subst.addEventListener('click', subtOnOff => {
        if (subsEnable == true) {
            repro.textTracks[0].mode = 'hidden'
            subsEnable = false;
        } else {
            repro.textTracks[0].mode = 'showing'
            subsEnable = true;
        }
    });
    //Cambio de volumen
    volumen.addEventListener('change', cambiarVol => {
        repro.volume = volumen.value;
        console.log(volumen.value);
    })
    //Activar/Desactivar video en loop
    loop.addEventListener('click', cambioLoop => {
        repro.loop = !repro.loop;
    })
    //Modo luces apagadas/encendidas
    luces.addEventListener('click', fueraLuces => {
        if (luz == true) {
            fondo.style.backgroundColor = 'black';
            fondo2.style.backgroundColor = 'black';
            luz = false;
        } else {
            fondo.style.backgroundColor = 'white';
            fondo2.style.backgroundColor = 'white';
            luz = true;
        }

    })
    //Maximizar ventana y oculta el header y footer.
    maximizar.addEventListener('click', maximizar => {
        if (max == false) {
            cRepro.style.maxWidth = '94%';
            botonera.style.backgroundColor = "#00000000";
            max = true
            //body.style.backgroundColor = "black"
        } else {
            cRepro.style.maxWidth = '70%';
            botonera.style.backgroundColor = " rgba(4, 0, 255, 0.475)";
            max = false
            //body.style.backgroundColor = "white"
        }
        //repro.requestFullscreen();
    })
    //Click en video para reproducir o pausar
    repro.addEventListener('click', incioPausa => {
        if (enRepro == false) {
            repro.play();
            enRepro = true;
        } else {
            repro.pause();
            enRepro = false;
        }
    })
    //Muestra los botones cuando entra en el video a cierto tamaño de pantalla
    repro.addEventListener('mouseenter', mostrarBotonesRepro => {
        if (window.screen.width < 850) {
            botonera.style.display = 'none';
        } else {
            botonera.style.display = 'flex';
        }
    })

    botonera.addEventListener('mouseenter', mostrarPlay => {
        botonera.style.display = 'flex';
    })
    //Ocultar botonera cuando sale el ratón de la botonera.
    botonera.addEventListener('mouseleave', mostrarPlay => {

        botonera.style.display = 'none';

    })
    //Ocultar botonera cuando sale el ratón del video.
    repro.addEventListener('mouseleave', ocultarBotonesRepro => {

        botonera.style.display = 'none';

    })
    //Función para ocultar la botonera cuándo quieras.
    ocult.addEventListener('click', ocultarBarra => {
        if (ocultoOnOff == false) {
            botonera.style.backgroundColor = "#00000000";
            play.style.display = 'none'
            masTime.style.display = 'none'
            menosTime.style.display = 'none'
            velo.style.display = 'none'
            volumen.style.display = 'none'
            loop.style.display = 'none'
            maximizar.style.display = 'none'
            subst.style.display = 'none'
            botonOcult.style.opacity = '0.3';
            botonera.style.justifyContent = 'right';
            bLuces.style.display = 'none';
            ocultoOnOff = true;
        } else {
            botonera.style.backgroundColor = "#00000000";
            play.style.display = 'flex'
            masTime.style.display = 'flex'
            menosTime.style.display = 'flex'
            velo.style.display = 'flex'
            volumen.style.display = 'flex'
            loop.style.display = 'flex'
            maximizar.style.display = 'flex'
            subst.style.display = 'flex'
            bLuces.style.display = 'flex';
            botonOcult.style.opacity = '1';

            botonera.style.justifyContent = 'center';

            ocultoOnOff = false;
        }
    })



});