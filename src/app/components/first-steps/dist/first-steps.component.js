"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FirstStepsComponent = void 0;
var core_1 = require("@angular/core");
var FirstStepsComponent = /** @class */ (function () {
    function FirstStepsComponent() {
        this.opcionASeguir = { nombre: '', back: 0, next: 1 };
        this.listado = [
            {
                posicion: 0,
                back: 0,
                next: 1,
                header: 'Bienvenidas y bienvenidos',
                title: 'Introducción',
                description: 'Gracias por elegir productos de Robótica Educativa de Mis Ladrillos. En este asistente recorreremos una serie de pasos para la instalación del mBlock, selección del bloque lógico y el primer programar de ejemplo.',
                textButton1: '',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1,
                back: 0,
                next: 2,
                header: 'Requisitos',
                image: '../../../../assets/wizard/firststeps/mouse.jpg',
                title: 'Requisitos necesarios la utilización de la plataforma mBlock',
                description: 'Para poder utilizar correctamente todas las características de los kits de Mis Ladrillos que utilizan el mBlock como plataforma de programación, es necesario contar con un mouse o touchpad que funcione para realizar el Scroll en los conjuntos de acciones con la ruedita (en caso del mouse) o sección de Scroll (en caso del touchpad de la notebook, netbook y/o Chromebook).',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 2,
                back: 1,
                next: 99,
                alternativas: [
                    {
                        nombre: 'Windows',
                        back: 1,
                        next: 1000
                    },
                    {
                        nombre: 'MAC',
                        back: 1,
                        next: 2000
                    },
                    {
                        nombre: 'GNU/Linux',
                        back: 1,
                        next: 3000
                    },
                    {
                        nombre: 'Chromebook',
                        back: 1,
                        next: 4000
                    },
                ],
                header: 'Instalación del mBlock',
                title: 'Selección del Sistema Operativo',
                description: 'Para empezar la instalación del mBlock, vamos a necesitar que seleccione el Sistema Operativo de su computadora. Recuerde que el mBlock no puede ser instalado en tablets o celulares.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1000,
                back: 1,
                next: 1001,
                alternativas: [],
                button: {
                    name: '',
                    link: 'https://dl.makeblock.com/mblock5/win32/V5.2.0.exe'
                },
                header: 'Instalación del mBlock',
                title: 'mBlock para Windows',
                description: 'Para poder descargar el mBlock para Windows, por favor, haz clic en el botón "Descargar"',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1001,
                back: 1000,
                next: 1002,
                header: 'Instalación del mBlock para Windows',
                title: 'Instalación del mBlock. Paso 1 de 3',
                description: 'Para comenzar la instalación, ejecute el archivo que descargó en el paso anterior',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1002,
                back: 1001,
                next: 1003,
                header: 'Instalación del mBlock para Windows',
                title: 'Instalación del mBlock. Paso 2 de 3',
                description: 'Windows le pedirá autorización para poder instalar el mBlock, a lo cuál hay que aceptar el mensaje.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1003,
                back: 1002,
                next: 1004,
                header: 'Instalación del mBlock para Windows',
                title: 'Instalación del mBlock. Paso 3 de 3',
                description: 'La instalación se realizará en el idioma Inglés (cuando estemos usando el programar, se pasará al idioma Español). Luego de aceptar el idioma, sólo hay que apretar en el botón "Next" en todos los carteles que aparezcan. La instalación puede durar varios minutos',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1004,
                back: 1003,
                next: 1005,
                header: 'Utilizando el mBlock para Windows',
                image: '../../../../assets/wizard/firststeps/run_mblock.PNG',
                title: 'Ejecutando el mBlock',
                description: 'Una vez realizada la instalación, procederemos a ejecutar el programa mBlock desde el ícono que aparece en el Escritorio de su Windows. Hay que tener paciencia, la primera vez que inicia mBlock puede durar hasta 5 minutos porque baja varios archivos desde Internet.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1005,
                back: 1004,
                next: 1006,
                header: 'Utilizando el mBlock para Windows',
                image: '../../../../assets/wizard/firststeps/mblock_display.PNG',
                title: 'Reconociendo el mBlock',
                description: 'En el lado izquierdo podremos encontrar la sección de "Dispositivos", aquí es donde hay que borrar el dispositivo por defecto y seleccionar el bloque lógico que trae el kit adquirido. En los siguiente pasos, podremos realizar todos estas instrucciones.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1006,
                back: 1005,
                next: 1007,
                header: 'Utilizando el mBlock para Windows',
                title: 'Reconociendo nuestro bloque lógico',
                description: 'Es hora de buscar el bloque lógico del kit adquirido. En el siguiente paso empezaremos a identificarlo para hacer una correcta instalación.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1007,
                back: 1006,
                next: 99,
                alternativas: [
                    {
                        nombre: 'Kinderbot',
                        back: 1006,
                        next: 1900
                    },
                    {
                        nombre: 'R-400 Steam en casa',
                        back: 1006,
                        next: 11000
                    },
                    {
                        nombre: 'Core R1',
                        back: 1006,
                        next: 1100
                    },
                    {
                        nombre: 'Core R2',
                        back: 1006,
                        next: 1200
                    },
                    {
                        nombre: 'Core R8',
                        back: 1006,
                        next: 1400
                    },
                    {
                        nombre: 'Core R8+',
                        back: 1006,
                        next: 1600
                    },
                ],
                image: '../../../../assets/wizard/firststeps/selection_core.png',
                header: 'Utilizando el mBlock para Windows',
                title: 'Reconociendo nuestro bloque lógico',
                description: 'Es necesario que reconozca su bloque lógico. La diferencia entre el Core R8 y el Core R8+ son la cantidad de pines que tienen cada puerto. El Core R8 cuenta con 4 pines por conector y el Core R8+ cuenta con 6 pines por cada conector',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 11000,
                back: 1007,
                next: 1101,
                header: 'Utilizando el mBlock para Windows',
                title: 'R400 Steam en casa',
                image: '../../../../assets/wizard/firststeps/R400.jpg',
                description: 'El kit R-400 Steam en casa se enfoca en una programación básica utilizando el control remoto y, desde el mBlock podrá crear su propia programación mediante bloques.',
                textButton1: 'Atrás',
                textButton2: '',
                textButton3: 'Ver actividades',
                textButton3Link: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDpKl2uHEW4aAntcBLvkwI13'
            },
            {
                posicion: 1100,
                back: 1007,
                next: 1101,
                header: 'Utilizando el mBlock para Windows',
                title: 'El Core R1',
                image: '../../../../assets/wizard/firststeps/R1.jpg',
                description: 'Los siguientes pasos haremos la configuración para que el bloque lógico Core R1 sea el dispositivo predeterminado',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1101,
                back: 1100,
                next: 1102,
                header: 'Utilizando el mBlock para Windows',
                title: 'Quitando el dispositivo Codey',
                image: '../../../../assets/wizard/firststeps/remove_codey_1.png',
                description: 'Lo primero que debemos hacer es quitar el dispositivo Codey haciendo un clic sobre la cruz que tiene. Luego hacer clic sobre el botón borrar.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1102,
                back: 1101,
                next: 1103,
                button: {
                    name: '',
                    link: 'http://www.misladrillos.com/images/educacion/firmware/mis_ladrillos_r1.mext'
                },
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R1',
                description: 'Descargamos la última versión del Core R1',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1103,
                back: 1102,
                next: 1104,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R1',
                description: 'Arrastrar el archivo descargado hasta el mBlock para proceder con la instalación de la última versión del Core R1.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1104,
                back: 1103,
                next: 1105,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R1',
                image: '../../../../assets/wizard/firststeps/button_add.png',
                description: 'Hacer un clic sobre el botón añadir. Buscar el dispositivo Core R1. Hacer un clic sobre el dispositivo Core R1 para luego presionar sobre la estrella que aparecerá en el borde superior izquierda.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1105,
                back: 1104,
                next: 1106,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R1',
                description: 'Una vez hechos los pasos anteriores, hacer clic en el botón "Aceptar".',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1106,
                back: 1105,
                next: 1107,
                header: 'Utilizando el mBlock para Windows',
                title: 'Felicidades',
                description: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.',
                textButton1: 'Atrás',
                textButton2: '',
                textButton3: 'Ver actividades',
                textButton3Link: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDrnsGg11jNeDWiH_s3xS-7m'
            },
            {
                posicion: 1200,
                back: 1007,
                next: 1201,
                header: 'Utilizando el mBlock para Windows',
                title: 'El Core R2',
                image: '../../../../assets/wizard/firststeps/R2.jpg',
                description: 'Los siguientes pasos haremos la configuración para que el bloque lógico Core R2 sea el dispositivo predeterminado',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1201,
                back: 1200,
                next: 1202,
                header: 'Utilizando el mBlock para Windows',
                title: 'Quitando el dispositivo Codey',
                image: '../../../../assets/wizard/firststeps/remove_codey_1.png',
                description: 'Lo primero que debemos hacer es quitar el dispositivo Codey haciendo un clic sobre la cruz que tiene. Luego hacer clic sobre el botón borrar.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1202,
                back: 1201,
                next: 1203,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R2',
                image: '../../../../assets/wizard/firststeps/button_add.png',
                description: 'Una vez quitado el dispositivo Codey, haremos clic sobre el botón "Añadir".',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1203,
                back: 1202,
                next: 1204,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R2',
                image: '../../../../assets/wizard/firststeps/add_r2_1.png',
                description: 'Buscar el Core R2 en la lista que aparece y hacer clic en el botón azul el cual tiene un +. Empezará a descargar los controladores del Core R2.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1204,
                back: 1203,
                next: 1205,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R2',
                image: '../../../../assets/wizard/firststeps/add_r2_2.png',
                description: 'Luego de que finalice la descarga, volver a hacerle un clic sobre el Core R2 y apretar sobre la estrella para dejar el dispositivo como predeterminado.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1205,
                back: 1204,
                next: 1206,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R2',
                image: '../../../../assets/wizard/firststeps/add_r2_3.png',
                description: 'Una vez hechos los pasos anteriores, hacer clic en el botón "Aceptar".',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1206,
                back: 1205,
                next: 1207,
                header: 'Utilizando el mBlock para Windows',
                title: 'Felicidades',
                image: '../../../../assets/wizard/firststeps/add_r2_4.png',
                description: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.',
                textButton1: 'Atrás',
                textButton2: '',
                textButton3: 'Ver actividades',
                textButton3Link: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDrnsGg11jNeDWiH_s3xS-7m'
            },
            {
                posicion: 1400,
                back: 1007,
                next: 1401,
                header: 'Utilizando el mBlock para Windows',
                title: 'El Core R8',
                image: '../../../../assets/wizard/firststeps/R8.jpg',
                description: 'Los siguientes pasos haremos la configuración para que el bloque lógico Core R8 sea el dispositivo predeterminado',
                textButton1: 'Atrás',
                textButton2: 'Siguiente',
                textButton3: 'Ver en video',
                textButton3Link: 'https://www.youtube.com/watch?v=dEBZLHeQdj0&list=PLYp9GyBA5ZDowznozUHXRfCpklan2CG-J'
            },
            {
                posicion: 1401,
                back: 1400,
                next: 1402,
                header: 'Utilizando el mBlock para Windows',
                title: 'Quitando el dispositivo Codey',
                image: '../../../../assets/wizard/firststeps/remove_codey_1.png',
                description: 'Lo primero que debemos hacer es quitar el dispositivo Codey haciendo un clic sobre la cruz que tiene. Luego hacer clic sobre el botón borrar.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1402,
                back: 1401,
                next: 1403,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R8',
                image: '../../../../assets/wizard/firststeps/button_add.png',
                description: 'Una vez quitado el dispositivo Codey, haremos clic sobre el botón "Añadir".',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1403,
                back: 1402,
                next: 1404,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R8',
                image: '../../../../assets/wizard/firststeps/add_r8_1.png',
                description: 'Buscar el Core R8 en la lista que aparece y hacer clic en el botón azul el cual tiene un +. Empezará a descargar los controladores del Core R8.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1404,
                back: 1403,
                next: 1405,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R8',
                image: '../../../../assets/wizard/firststeps/add_r8_2.png',
                description: 'Luego de que finalice la descarga, volver a hacerle un clic sobre el Core R8 y apretar sobre la estrella para dejar el dispositivo como predeterminado.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1405,
                back: 1404,
                next: 1406,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R8',
                image: '../../../../assets/wizard/firststeps/add_r2_3.png',
                description: 'Una vez hechos los pasos anteriores, hacer clic en el botón "Aceptar".',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1406,
                back: 1405,
                next: 1407,
                header: 'Utilizando el mBlock para Windows',
                title: 'Felicidades',
                image: '../../../../assets/wizard/firststeps/add_r8_4.png',
                description: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.',
                textButton1: 'Atrás',
                textButton2: '',
                textButton3: 'Ver actividades',
                textButton3Link: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDpi35aEtHr_s1I4SWmCSKjV'
            },
            {
                posicion: 1600,
                back: 1007,
                next: 1601,
                header: 'Utilizando el mBlock para Windows',
                title: 'El Core R8+',
                image: '../../../../assets/wizard/firststeps/R8-plus.jpg',
                description: 'Los siguientes pasos haremos la configuración para que el bloque lógico Core R8+ sea el dispositivo predeterminado',
                textButton1: 'Atrás',
                textButton2: 'Siguiente',
                textButton3: 'Ver en video',
                textButton3Link: 'https://www.youtube.com/watch?v=gI5j0yjSphM&list=PLYp9GyBA5ZDpQUfKigQbr1w-i9EnfWWQ1'
            },
            {
                posicion: 1601,
                back: 1600,
                next: 1602,
                header: 'Utilizando el mBlock para Windows',
                title: 'Quitando el dispositivo Codey',
                image: '../../../../assets/wizard/firststeps/remove_codey_1.png',
                description: 'Lo primero que debemos hacer es quitar el dispositivo Codey haciendo un clic sobre la cruz que tiene. Luego hacer clic sobre el botón borrar.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1602,
                back: 1601,
                next: 1603,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R8+',
                image: '../../../../assets/wizard/firststeps/button_add.png',
                description: 'Una vez quitado el dispositivo Codey, haremos clic sobre el botón "Añadir".',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1603,
                back: 1602,
                next: 1604,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R8+',
                image: '../../../../assets/wizard/firststeps/add_r8_plus_1.png',
                description: 'Buscar el Core R8+ en la lista que aparece y hacer clic en el botón azul el cual tiene un +. Empezará a descargar los controladores del Core R8+.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1604,
                back: 1603,
                next: 1605,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R8+',
                image: '../../../../assets/wizard/firststeps/add_r8_plus_2.png',
                description: 'Luego de que finalice la descarga, volver a hacerle un clic sobre el Core R8+ y apretar sobre la estrella para dejar el dispositivo como predeterminado.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1605,
                back: 1604,
                next: 1606,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Core R8+',
                image: '../../../../assets/wizard/firststeps/add_r2_3.png',
                description: 'Una vez hechos los pasos anteriores, hacer clic en el botón "Aceptar".',
                textButton1: 'Atrás',
                textButton2: 'Actualización de seguridad (Necesaria)'
            },
            {
                posicion: 1606,
                back: 1605,
                next: 1607,
                header: 'Utilizando el mBlock para Windows',
                title: 'Actualización de seguridad del Core R8+',
                description: 'Es indispensable realizar la actualización del Firmware del Core R8+. Recuerde que en la descripción del video encontrará el link de descarga de la última versión del Firmware del Core R8+',
                textButton1: 'Atrás',
                textButton2: 'Siguiente',
                textButton3: 'Ver cómo actualizar',
                textButton3Link: 'https://youtu.be/YHlaY0c1P5k'
            },
            {
                posicion: 1607,
                back: 1606,
                next: 1608,
                header: 'Utilizando el mBlock para Windows',
                title: 'Felicidades',
                image: '../../../../assets/wizard/firststeps/add_r8_plus_4.png',
                description: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.',
                textButton1: 'Atrás',
                textButton2: '',
                textButton3: 'Ver actividades',
                textButton3Link: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDqSbTVgw57azrS9qaau5rpW'
            },
            {
                posicion: 1900,
                back: 1007,
                next: 1901,
                header: 'Utilizando el mBlock para Windows',
                title: 'Kinderbot',
                image: '../../../../assets/wizard/firststeps/Kinderbot.jpg',
                description: 'Los siguientes pasos haremos la configuración para que el Kinderbot sea el dispositivo predeterminado',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1901,
                back: 1900,
                next: 1902,
                header: 'Utilizando el mBlock para Windows',
                title: 'Quitando el dispositivo Codey',
                image: '../../../../assets/wizard/firststeps/remove_codey_1.png',
                description: 'Lo primero que debemos hacer es quitar el dispositivo Codey haciendo un clic sobre la cruz que tiene. Luego hacer clic sobre el botón borrar.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1902,
                back: 1901,
                next: 1903,
                button: {
                    name: '',
                    link: 'http://www.misladrillos.com/images/educacion/firmware/ml_kinderbot.mext'
                },
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Kinderbot',
                description: 'Descargamos la última versión del Kinderbot',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1903,
                back: 1902,
                next: 1904,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Kinderbot',
                description: 'Arrastrar el archivo descargado hasta el mBlock para proceder con la instalación de la última versión del Kinderbot.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1904,
                back: 1903,
                next: 1905,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Kinderbot',
                image: '../../../../assets/wizard/firststeps/button_add.png',
                description: 'Hacer un clic sobre el botón añadir. Buscar el dispositivo Kinderbot. Hacer un clic sobre el dispositivo Kinderbot para luego presionar sobre la estrella que aparecerá en el borde superior izquierda.',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1905,
                back: 1904,
                next: 1906,
                header: 'Utilizando el mBlock para Windows',
                title: 'Agregando el dispositivo Kinderbot',
                description: 'Una vez hechos los pasos anteriores, hacer clic en el botón "Aceptar".',
                textButton1: 'Atrás',
                textButton2: 'Siguiente'
            },
            {
                posicion: 1906,
                back: 1905,
                next: 1907,
                header: 'Utilizando el mBlock para Windows',
                title: 'Felicidades',
                description: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.',
                textButton1: 'Atrás',
                textButton2: '',
                textButton3: 'Ver actividades',
                textButton3Link: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDo6UmN_KbT9EjQr4bRKxm7x'
            },
            {
                posicion: 2000,
                back: 1,
                next: 2000,
                alternativas: [],
                button: {
                    name: '',
                    link: 'https://dl.makeblock.com/mblock5/darwin/V5.2.0.pkg'
                },
                header: 'Instalación del mBlock',
                title: 'mBlock para MAC',
                description: 'Para poder descargar el mBlock para MAC, por favor, haz clic en el botón "Descargar"',
                textButton1: 'Atrás',
                textButton2: ''
            },
            {
                posicion: 3000,
                back: 1,
                next: 3000,
                alternativas: [],
                header: 'Instalación del mBlock',
                title: 'GNU/Linux',
                description: 'GNU/Linux',
                textButton1: 'Atrás',
                textButton2: ''
            },
            {
                posicion: 4000,
                back: 1,
                next: 4000,
                alternativas: [],
                header: 'Instalación del mBlock',
                title: 'Chrombook',
                description: 'Chromebook',
                textButton1: 'Atrás',
                textButton2: ''
            },
        ];
        this.datos = this.listado[0];
    }
    FirstStepsComponent.prototype.ngOnInit = function () {
    };
    FirstStepsComponent.prototype.next = function () {
        //console.log(this.datos);
        if (this.datos.next == 99) {
            this.datos = this.buscarPosicion(this.opcionASeguir.next);
        }
        else {
            this.datos = this.buscarPosicion(this.datos.next);
        }
        //this.opcionASeguir.nombre = ''
    };
    FirstStepsComponent.prototype.back = function () {
        if (this.datos.next == 99 && this.opcionASeguir && this.opcionASeguir.nombre.length > 0) {
            this.datos = this.buscarPosicion(this.opcionASeguir.back);
            //this.opcionASeguir.nombre = ''
        }
        else {
            this.datos = this.buscarPosicion(this.datos.back);
        }
    };
    FirstStepsComponent.prototype.buscarPosicion = function (numero) {
        var posicion, index = 0;
        //console.log(this.listado);
        this.listado.forEach(function (opcion) {
            if (opcion.posicion == numero) {
                posicion = index;
            }
            index++;
        });
        return this.listado[posicion];
    };
    FirstStepsComponent.prototype.cambiarOpcion = function (opcion) {
        //console.log(opcion);
        this.opcionASeguir = opcion;
    };
    FirstStepsComponent.prototype.download = function (object) {
        open(object.link);
    };
    FirstStepsComponent.prototype.goto = function (link) {
        open(link, '_blank');
    };
    FirstStepsComponent = __decorate([
        core_1.Component({
            selector: 'app-first-steps',
            templateUrl: './first-steps.component.html',
            styleUrls: ['./first-steps.component.scss']
        })
    ], FirstStepsComponent);
    return FirstStepsComponent;
}());
exports.FirstStepsComponent = FirstStepsComponent;
