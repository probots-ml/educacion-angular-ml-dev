import { Component, OnInit } from '@angular/core';
import { UnidadAsistente, UnidadEnlace, ControladorAsistente } from './AsistenteMED';

@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.component.html',
  styleUrls: ['./first-steps.component.scss']
})




export class FirstStepsComponent implements OnInit {
  paginaActual: string;
  nuevoAsistente: boolean;
  datosActual = new UnidadAsistente();
  asistente = new ControladorAsistente();

  descripciones = {
    inicio: 'Gracias por elegir productos de Robótica Educativa de Mis Ladrillos. En este asistente recorreremos una serie de pasos para la instalación del mBlock o MakeCode, para comenzar seleccione que linea de producto tiene.'
    ,arduino: 'Presione el boton para ir al area de descargas de Arduino y descargue Arduino IDE.'
    ,makecode: 'Para poder utilizar correctamente todas las características del kit R8-Microbit de Mis Ladrillos que utilizan MakeCode como plataforma de programación, es necesario contar con un mouse o touchpad que funcione para realizar el Scroll en los conjuntos de acciones con la ruedita (en caso del mouse) o sección de Scroll (en caso del touchpad de la notebook y/o netbook).'
    ,makecode_1: 'Para empezar la instalación de MakeCode, vamos a necesitar que seleccione el Sistema Operativo de su computadora.'
    ,makecode_online: 'Usted puede acceder al editor online siguiendo el enlace siguiente.'
    ,makecode_mac: 'Para poder descargar MakeCode para Mac, por favor, haz clic en el botón "Descargar".'
    ,makecode_mac_1: 'Para comenzar la instalación, ejecute el archivo que descargó en el paso anterior y acepte si solicita autorizacion para ejecutarse. Luego de esto, deberemos esperar a que se termine de instalar MakeCode.'
    ,makecode_win: 'Para poder descargar MakeCode para Windows, por favor, haz clic en el botón "Descargar".'
    //,makecode_win_1: 'Para comenzar la instalación, ejecute el archivo que descargó en el paso anterior y acepte si solicita autorizacion para ejecutarse. Luego de esto, deberemos esperar a que se termine de instalar MakeCode.'
    ,makecode_pp: 'Una vez realizada la instalación, procederemos a ejecutar el programa MakeCode desde el ícono que aparece en su Escritorio.'
    ,makecode_pp_1: 'Una vez abierto el editor deberiamos visualizar el siguiente entorno.'
    ,makecode_pp_2: 'Si el programa no inicia en el idioma que usted desea puede cambiar el mismo desde el panel de lenguajes accediendo desde la parte superior derecha del editor y seleccionando el idioma deseado.'
    ,makecode_pp_3: 'Felicidades! ya tiene instalado el editor MakeCode para micro:bit, por favor continue seleccionado una de las opciones.'
    ,makecode_pp_4: 'En la siguiente pagina usted encontrara una guia basica de primeros pasos para conocer el uso de la extension Probots junto con la correcta construccion de las piezas escenciales del kit y los primeros pasos en la programacion con MakeCode.'
    ,makecode_pp_actividad: 'En la siguiente pagina usted encontrara una guia sobre como armar el modelo trio junto con una guia de programacion para poder darle comportamiento al modelo previamente construido.'
    ,mblock: 'Para poder utilizar correctamente todas las características de los kits de Mis Ladrillos que utilizan el mBlock como plataforma de programación, es necesario contar con un mouse o touchpad que funcione para realizar el Scroll en los conjuntos de acciones con la ruedita (en caso del mouse) o sección de Scroll (en caso del touchpad de la notebook y/o netbook).'
    ,mblock_1: 'Para empezar la instalación del mBlock, vamos a necesitar que seleccione el Sistema Operativo de su computadora. Recuerde que el mBlock no puede ser instalado en tablets o celulares.'
    ,mblock_win: 'Para poder descargar el mBlock para Windows, por favor, haz clic en el botón "Descargar"'
    ,mblock_win_1: 'Para comenzar la instalación, ejecute el archivo que descargó en el paso anterior'
    ,mblock_win_2: 'Windows le pedirá autorización para poder instalar el mBlock, a lo cuál hay que aceptar el mensaje.'
    ,mblock_win_3: 'La instalación se realizará en el idioma Inglés (cuando estemos usando el programar, se pasará al idioma Español). Luego de aceptar el idioma, sólo hay que apretar en el botón "Next" en todos los carteles que aparezcan. La instalación puede durar varios minutos'
    ,mblock_win_4: 'Una vez realizada la instalación, procederemos a ejecutar el programa mBlock desde el ícono que aparece en el Escritorio de su Windows. Hay que tener paciencia, la primera vez que inicia mBlock puede durar hasta 5 minutos porque baja varios archivos desde Internet.'
    ,mblock_win_5: 'En el lado izquierdo podremos encontrar la sección de "Dispositivos", aquí es donde hay que borrar el dispositivo por defecto y seleccionar el bloque lógico que trae el kit adquirido. En los siguiente pasos, podremos realizar todos estas instrucciones.'
    ,mblock_win_6: 'Es hora de buscar el bloque lógico del kit adquirido. En el siguiente paso empezaremos a identificarlo para hacer una correcta instalación.'
    ,mblock_win_7: 'Es necesario que reconozca su bloque lógico. La diferencia entre el Core R8 y el Core R8+ son la cantidad de pines que tienen cada puerto. El Core R8 cuenta con 4 pines por conector y el Core R8+ cuenta con 6 pines por cada conector'
    ,mblock_win_r4: 'El kit R-400 Steam en casa se enfoca en una programación básica utilizando el control remoto y, desde el mBlock podrá crear su propia programación mediante bloques.'
    ,mblock_win_r1: 'Los siguientes pasos haremos la configuración para que el bloque lógico Core R1 sea el dispositivo predeterminado'
    ,mblock_win_r1_1: 'Lo primero que debemos hacer es quitar el dispositivo Codey haciendo un clic sobre la cruz que tiene. Luego hacer clic sobre el botón borrar.'
    ,mblock_win_r1_3: 'Arrastrar el archivo descargado hasta el mBlock para proceder con la instalación de la última versión del Core R1.'
    ,mblock_win_r1_4: 'Hacer un clic sobre el botón añadir. Buscar el dispositivo Core R1. Hacer un clic sobre el dispositivo Core R1 para luego presionar sobre la estrella que aparecerá en el borde superior izquierda.'
    ,mblock_win_r2: 'Los siguientes pasos haremos la configuración para que el bloque lógico Core R2 sea el dispositivo predeterminado.'
    ,mblock_win_r2_1: 'Lo primero que debemos hacer es quitar el dispositivo que viene por defecto, en algunos casos, Codey, lo retiramos haciendo un clic sobre la cruz que tiene. Luego hacer clic sobre el botón borrar.'
    ,mblock_win_r2_2: 'Una vez quitado el dispositivo por defecto, haremos clic sobre el botón "Añadir".'
    ,mblock_win_r2_3: 'Buscar el Core R2 en la lista que aparece y hacer clic en el botón azul el cual tiene un +. Empezará a descargar los controladores del Core R2.'
    ,mblock_win_r2_4: 'Luego de que finalice la descarga, volver a hacerle un clic sobre el Core R2 y apretar sobre la estrella para dejar el dispositivo como predeterminado.'
    ,mblock_win_r2_5: 'Una vez hechos los pasos anteriores, hacer clic en el botón "Aceptar".'
    ,mblock_win_r8: 'Los siguientes pasos haremos la configuración para que el bloque lógico Core R8 sea el dispositivo predeterminado'
    ,mblock_win_r8_1: 'Lo primero que debemos hacer es quitar el dispositivo que viene por defecto, en algunos casos, Codey, lo retiramos haciendo un clic sobre la cruz que tiene. Luego hacer clic sobre el botón borrar.'
    ,mblock_win_r8_3: 'Buscar el Core R8 en la lista que aparece y hacer clic en el botón azul el cual tiene un +. Empezará a descargar los controladores del Core R8.'
    ,mblock_win_r8_4: 'Luego de que finalice la descarga, volver a hacerle un clic sobre el Core R8 y apretar sobre la estrella para dejar el dispositivo como predeterminado.'
    ,mblock_win_rp: 'Los siguientes pasos haremos la configuración para que el bloque lógico Core R8+ sea el dispositivo predeterminado'
    ,mblock_win_rp_3: 'Buscar el Core R8+ en la lista que aparece y hacer clic en el botón azul el cual tiene un +. Empezará a descargar los controladores del Core R8+.'
    ,mblock_win_rp_4: 'Luego de que finalice la descarga, volver a hacerle un clic sobre el Core R8+ y apretar sobre la estrella para dejar el dispositivo como predeterminado.'
    ,mblock_win_rp_6: 'Para actualizar el firmware debe seguir los siguientes pasos. Primero descargar desde el boton "Descargar Firmware" luego abrir el mBlock previamente instalado. Una vez abierto, arrastrar el archivo descargado a mBlock. Aparecerá un cartel que indica que se importó correctamente, luego de esto, cerrar y volver abrir el mBlock.'// 'Es indispensable realizar la actualización del Firmware del Core R8+. Recuerde que en la descripción del video encontrará el link de descarga de la última versión del Firmware del Core R8+'
    ,mblock_win_kb: 'Los siguientes pasos haremos la configuración para que el Kinderbot sea el dispositivo predeterminado'
    ,mblock_win_kb_3: 'Arrastrar el archivo descargado hasta el mBlock para proceder con la instalación de la última versión del Kinderbot.'
    ,mblock_win_kb_4: 'Hacer un clic sobre el botón añadir. Buscar el dispositivo Kinderbot. Hacer un clic sobre el dispositivo Kinderbot para luego presionar sobre la estrella que aparecerá en el borde superior izquierda.'
    ,mblock_win_kb_6a1: 'El siguiente enlace explica como utilizar la aplicacion para Android que sirve para utilizar los productos Kinderbot con bluetooth integrado. Tambien se puede apreciar una guia en videos sobre como utilizar el control remoto asi como los cambios de modo del producto.'
    ,mblock_win_kb_6b1: 'El siguiente enlace contiene una serie de actividades interactivas cuyas explicaciones pueden brindar informacion adicional sobre el mundo que nos rodea para los infantes.'
    ,ardublock_1: 'A continuación siga los pasos para la instalacion de ArduBlock, por favor, seleccione que version de ArduBlock desea instalar.'
    ,ardublock_r8sj: 'Presione "Descargar" para descargar el software de ArduBlock para el ladrillo inteligente R8sj'
    ,ardublock_r8p: 'Presione "Descargar" para descargar el software de ArduBlock para el ladrillo inteligente R8+'
    ,ardublock: 'Para instalar ArduBlock es requisito tener instalado Arduino, de preferencia se recomienda la version 1.6.9. Siga el siguiente enlace al area de descargas oficial de Arduino IDE y descargue e instale la version correspondiente. Si ya posee Arduino IDE instalado en su equipo presione "Siguiente".'
    ,ardublock_2: 'Colocar el archivo descargado en "C:\\Program Files (x86)\\Arduino\\tools\\ArduBlockTool\\tool\\". Si dichas carpetas no existen ("ArduBlockTool" y "ArduBlockTool\\tool") debe crearlas.'
    ,ardublock_3: 'Luego para hacer uso de ArduBlock debe ejecutar Arduino IDE, una vez abierto vaya a "Herramientas\\ArduBlock".'
  };
  
  imagenes = {
    makecode: '../../../../assets/wizard/firststeps/mouse.jpg'
    ,makecode_pp: '../../../../assets/wizard/firststeps/icono_mc.png'
    ,makecode_pp_1: '../../../../assets/wizard/firststeps/microbit0.png'
    ,makecode_pp_2: '../../../../assets/wizard/firststeps/cambio_idioma_mc.png'
    ,mblock_win_4: '../../../../assets/wizard/firststeps/run_mblock.PNG'
    ,mblock_win_5: '../../../../assets/wizard/firststeps/mblock_display.PNG'
    ,mblock_win_7: '../../../../assets/wizard/firststeps/selection_core.png'
    ,mblock_win_r4: '../../../../assets/wizard/firststeps/R400.jpg'
    ,mblock_win_r1: '../../../../assets/wizard/firststeps/R1.jpg'
    ,mblock_win_r1_1: '../../../../assets/wizard/firststeps/remove_codey_1.png'
    ,mblock_win_r1_4: '../../../../assets/wizard/firststeps/button_add.png'
    ,mblock_win_r2: '../../../../assets/wizard/firststeps/R2.jpg'
    ,mblock_win_r2_3: '../../../../assets/wizard/firststeps/add_r2_1.png'
    ,mblock_win_r2_4: '../../../../assets/wizard/firststeps/add_r2_2.png'
    ,mblock_win_r2_5: '../../../../assets/wizard/firststeps/add_r2_3.png'
    ,mblock_win_r2_6: '../../../../assets/wizard/firststeps/add_r2_4.png'
    ,mblock_win_r8: '../../../../assets/wizard/firststeps/R8.jpg'
    ,mblock_win_r8_1: '../../../../assets/wizard/firststeps/remove_codey_1.png'
    ,mblock_win_r8_3: '../../../../assets/wizard/firststeps/add_r8_1.png'
    ,mblock_win_r8_4: '../../../../assets/wizard/firststeps/add_r8_2.png'
    ,mblock_win_r8_5: '../../../../assets/wizard/firststeps/add_r2_3.png'
    ,mblock_win_r8_6: '../../../../assets/wizard/firststeps/add_r8_4.png'
    ,mblock_win_rp: '../../../../assets/wizard/firststeps/R8-plus.jpg'
    ,mblock_win_rp_3: '../../../../assets/wizard/firststeps/add_r8_plus_1.png'
    ,mblock_win_rp_4: '../../../../assets/wizard/firststeps/add_r8_plus_2.png'
    ,mblock_win_rp_7: '../../../../assets/wizard/firststeps/add_r8_plus_4.png'
    ,ardublock_1: '../../../../assets/wizard/firststeps/ardublock_1.png'
    //,mblock_win_kb: '../../../../assets/wizard/firststeps/Kinderbot.jpg'
  };

  enlaces = {
    arduino: new UnidadEnlace({enlace: 'https://www.arduino.cc/en/software/', descripcion: 'Ir a descargas de Arduino'})
    ,makecode_online: new UnidadEnlace({enlace: 'https://makecode.microbit.org/#', descripcion: 'Ir al editor online'})
    ,makecode_mac: new UnidadEnlace({enlace: 'https://makecode.com/api/release/microbit/v3.0.59/mac64', descripcion: 'Descargar'})
    ,makecode_win: new UnidadEnlace({enlace: 'https://makecode.com/api/release/microbit/v3.0.59/win64', descripcion: 'Descargar'})
    ,makecode_pp_4: new UnidadEnlace({enlace: 'http://misladrillos.com/ml/primeros-pasos-con-microbit-y-mis-ladrillos/', descripcion: 'Ir a la actividad'})
    ,makecode_pp_actividad: new UnidadEnlace({enlace: 'http://misladrillos.com/ml/proyectos/productos/microbit-trio-con-brazo/', descripcion: 'Ir a la actividad'})
    ,mblock_win: new UnidadEnlace({enlace: 'https://dl.makeblock.com/mblock5/win32/V5.3.0.exe', descripcion: 'Descargar'})
    ,mblock_win_r4: new UnidadEnlace({enlace: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDpKl2uHEW4aAntcBLvkwI13', descripcion: 'Ver actividades'})
    ,mblock_win_r1_2: new UnidadEnlace({enlace: 'http://www.misladrillos.com/images/educacion/firmware/mis_ladrillos_r1.mext', descripcion: 'Descargar extensión'})
    ,mblock_win_r1_5: new UnidadEnlace({enlace: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDrnsGg11jNeDWiH_s3xS-7m', descripcion: 'Ver actividades'})
    ,mblock_win_r8: new UnidadEnlace({enlace: 'https://www.youtube.com/watch?v=dEBZLHeQdj0&list=PLYp9GyBA5ZDowznozUHXRfCpklan2CG-J', descripcion: 'Ver en video'})
    ,mblock_win_r8_6: new UnidadEnlace({enlace: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDpi35aEtHr_s1I4SWmCSKjV', descripcion: 'Ver actividades'})
    ,mblock_win_rp: new UnidadEnlace({enlace: 'https://www.youtube.com/watch?v=gI5j0yjSphM&list=PLYp9GyBA5ZDpQUfKigQbr1w-i9EnfWWQ1', descripcion: 'Ver en video'})
    ,mblock_win_rp_6: new UnidadEnlace({enlace: 'https://misladrillos.com/images/educacion/firmware/mis_ladrillos_r8_plus.mext', descripcion: 'Descargar Firmware'})//new UnidadEnlace({enlace: 'https://youtu.be/YHlaY0c1P5k', descripcion: 'Ver cómo actualizar'})
    ,mblock_win_rp_7: new UnidadEnlace({enlace: 'https://www.youtube.com/playlist?list=PLYp9GyBA5ZDqSbTVgw57azrS9qaau5rpW', descripcion: 'Ver actividades'})
    ,mblock_win_kb: new UnidadEnlace({enlace: 'https://www.misladrillos.com/images/educacion/firmware/ml_kinderbot.mext', descripcion: 'Descargar'})
    ,mblock_win_kb_6: new UnidadEnlace({enlace: 'https://misladrillos.com/ml/proyectos/productos/kinderbot-marinos/', descripcion: 'Ver actividades'})
    ,mblock_win_kb_pp: new UnidadEnlace({enlace: 'https://misladrillos.com/ml/primeros-pasos-con-kinderbot/', descripcion: 'Primeros pasos'})
    ,mblock_mac: new UnidadEnlace({enlace: 'https://dl.makeblock.com/mblock5/darwin/V5.3.0.pkg', descripcion: 'Descargar'})
    ,ardublock_r8sj: new UnidadEnlace({enlace: 'http://www.edubots.com.ar/ardublock/sj/ardublock.jar', descripcion: 'Descargar'})
    ,ardublock_r8p: new UnidadEnlace({enlace: 'http://misladrillos.com/descargas/probots/ardublock-all.jar', descripcion: 'Descargar'})
    ,ardublock_a: new UnidadEnlace({enlace: 'https://misladrillos.com/ml/proyectos/?plataforma=ardublock', descripcion: 'Ver actividades'})
  };

  cabeceras = {
    inst_makecode: 'Instalación de MakeCode'
    ,inst_makecode_win: 'Instalación del MakeCode para Windows'
    ,makecode_pp: 'Primeros pasos con MakeCode'
    ,mblock_win: 'Instalación de mBlock para Windows'
    ,mblock_win_4: 'Utilizando mBlock para Windows'
    ,mblock_mac: 'Instalación de mBlock para Mac'
    ,ardublock_1: 'Instalación de ArduBlock'
  };

  titulos = {
    inst_makecode_win: 'Instalación de MakeCode de 64 bits.'
    ,mblock_win_6: 'Reconociendo nuestro bloque lógico'
    ,mblock_win_r1_2: 'Agregando el dispositivo Core R1'
    ,mblock_win_r2_2: 'Agregando el dispositivo Core R2'
    ,mblock_win_r8_2: 'Agregando el dispositivo Core R8'
    ,mblock_win_rp_2: 'Agregando el dispositivo Core R8+'
    ,mblock_win_kb_2: 'Agregando el dispositivo Kinderbot'
    
  };

  constructor() {
    this.paginaActual = "first-steps";
      this.datosActual = this.asistente
     /* .agregarUnidad(new UnidadAsistente({id: 'inicio', cabecera: 'inicio'}))
      .agregarUnidad(new UnidadAsistente({id: 'microbit01', siguiente: 'microbit02', cabecera: 'microbit01', padre: 'inicio'}))
      .agregarUnidad(new UnidadAsistente({id: 'microbit02', cabecera: 'microbit02', siguiente: 'microbit03', anterior: 'inicio'}))
      .agregarUnidad(new UnidadAsistente({id: 'microbit03', cabecera: 'enlace', anterior: 'microbit02', enlace: new UnidadEnlace({enlace: 'https://www.google.com.ar', descripcion: 'ir a google'})}))
      */
      //inicio
      .agregarUnidad(new UnidadAsistente({id: 'inicio', cabecera: 'Bienvenidas y bienvenidos', titulo: 'Introducción', descripcion: this.descripciones.inicio}))
      .agregarUnidad(new UnidadAsistente({id: 'opcion_inicio_o1', padre: 'inicio', siguiente: 'makecode', descripcion: 'micro:bit (MakeCode) (Solo para R503 Microbit)'}))
      .agregarUnidad(new UnidadAsistente({id: 'opcion_inicio_o2', padre: 'inicio', siguiente: 'mblock', descripcion: 'Arduino (mBlock) (Demás kits y Kinderbot)'}))
      .agregarUnidad(new UnidadAsistente({id: 'opcion_inicio_o3', padre: 'inicio', siguiente: 'arduino', descripcion: 'Usuarios avanzados (Arduino)'}))
      .agregarUnidad(new UnidadAsistente({id: 'opcion_inicio_o4', padre: 'inicio', siguiente: 'ardublock', descripcion: 'ArduBlock (Arduino)'}))
      .agregarUnidad(new UnidadAsistente({id: 'arduino', anterior: 'inicio', cabecera: 'Descarga de software de Arduino', titulo: 'Ir al enlace de descarga de la ultima version de Arduino IDE', descripcion: this.descripciones.arduino, enlace: this.enlaces.arduino}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode', anterior: 'inicio', siguiente: 'makecode_1', cabecera: 'Requisitos', titulo: 'Requisitos necesarios la utilización de la plataforma MakeCode', descripcion: this.descripciones.makecode, imagen: this.imagenes.makecode}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_1', anterior: 'makecode', cabecera: this.cabeceras.inst_makecode, titulo: 'Selección del Sistema Operativo', descripcion: this.descripciones.makecode_1}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_1o1', padre: 'makecode_1', siguiente: 'makecode_win', descripcion: 'Windows (64 bits)'}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_1o2', padre: 'makecode_1', siguiente: 'makecode_mac', descripcion: 'Mac (64 bits)'}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_1o3', padre: 'makecode_1', siguiente: 'makecode_online', descripcion: 'Editor online'}))
      
      //ardublock
      .agregarUnidad(new UnidadAsistente({id: 'ardublock', anterior: 'inicio', siguiente: 'ardublock_1', cabecera: 'Descarga de software de Arduino', titulo: 'Ir al enlace de descarga de Arduino IDE', descripcion: this.descripciones.ardublock, enlace: this.enlaces.arduino}))
      .agregarUnidad(new UnidadAsistente({id: 'ardublock_1', anterior: 'ardublock', cabecera: this.cabeceras.ardublock_1, titulo: 'Instructivo de instalacion para ArduBlock', descripcion: this.descripciones.ardublock_1}))
      .agregarUnidad(new UnidadAsistente({id: 'ardublock_1_o1', padre: 'ardublock_1', siguiente: 'ardublock_r8sj', descripcion: 'R8sj (2017)'}))
      .agregarUnidad(new UnidadAsistente({id: 'ardublock_1_o2', padre: 'ardublock_1', siguiente: 'ardublock_r8p', descripcion: 'R8+ (2018)'}))
      .agregarUnidad(new UnidadAsistente({id: 'ardublock_r8sj', anterior: 'ardublock_1', cabecera: this.cabeceras.ardublock_1, siguiente: 'ardublock_2', descripcion: this.descripciones.ardublock_r8sj, enlace: this.enlaces.ardublock_r8sj}))
      .agregarUnidad(new UnidadAsistente({id: 'ardublock_r8p', anterior: 'ardublock_1', cabecera: this.cabeceras.ardublock_1, siguiente: 'ardublock_2', descripcion: this.descripciones.ardublock_r8p, enlace: this.enlaces.ardublock_r8p}))
      .agregarUnidad(new UnidadAsistente({id: 'ardublock_2', anterior: 'ardublock', siguiente: 'ardublock_3', cabecera: this.cabeceras.ardublock_1, titulo: 'Instructivo de instalacion para ArduBlock', descripcion: this.descripciones.ardublock_2}))
      .agregarUnidad(new UnidadAsistente({id: 'ardublock_3', anterior: 'ardublock_2', siguiente: 'ardublock_4', cabecera: this.cabeceras.ardublock_1, titulo: 'Instructivo de instalacion para ArduBlock', descripcion: this.descripciones.ardublock_3, imagen: this.imagenes.ardublock_1}))
      .agregarUnidad(new UnidadAsistente({id: 'ardublock_4', anterior: 'ardublock_3', cabecera: this.cabeceras.ardublock_1, titulo: 'Felicidades!', descripcion: 'Ya tiene todo lo necesario para programar, si lo desea puede revisar nuestras actividades.', enlace: this.enlaces.ardublock_a}))
      
      //makecode online
      .agregarUnidad(new UnidadAsistente({id: 'makecode_online', anterior: 'makecode_1', siguiente: 'makecode_pp_1', cabecera: 'MakeCode editor online', titulo: 'Editor online', descripcion: this.descripciones.makecode_online, enlace: this.enlaces.makecode_online}))
      //makecode mac
      .agregarUnidad(new UnidadAsistente({id: 'makecode_mac', anterior: 'makecode_1', siguiente: 'makecode_mac_1', cabecera: this.cabeceras.inst_makecode, titulo: 'MakeCode para Mac de 64 bits', descripcion: this.descripciones.makecode_mac, enlace: this.enlaces.makecode_mac}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_mac_1', anterior: 'makecode_mac', siguiente: 'makecode_pp',cabecera: 'Instalación del MakeCode para Mac', titulo: 'Instalación de makecode para Mac de 64 bits.', descripcion: this.descripciones.makecode_mac_1}))
      //makecode windows
      .agregarUnidad(new UnidadAsistente({id: 'makecode_win', anterior: 'makecode_1', siguiente: 'makecode_win_1', cabecera: this.cabeceras.inst_makecode, titulo: this.titulos.inst_makecode_win, descripcion: this.descripciones.makecode_win, enlace: this.enlaces.makecode_win}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_win_1', anterior: 'makecode_win', siguiente: 'makecode_pp', cabecera: this.cabeceras.inst_makecode, titulo: this.titulos.inst_makecode_win, descripcion: this.descripciones.makecode_mac_1}))
      //primeros pasos con makecode
      .agregarUnidad(new UnidadAsistente({id: 'makecode_pp', anterior: 'makecode_win_1', siguiente: 'makecode_pp_1', cabecera: this.cabeceras.makecode_pp, titulo: 'Ejecutando MakeCode', descripcion: this.descripciones.makecode_pp}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_pp_1', anterior: 'makecode_pp', siguiente: 'makecode_pp_2', cabecera: this.cabeceras.makecode_pp, titulo: 'Entorno inicial de MakeCode', descripcion: this.descripciones.makecode_pp_1, imagen: this.imagenes.makecode_pp_1}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_pp_2', anterior: 'makecode_pp_1', siguiente: 'makecode_pp_3', cabecera: this.cabeceras.makecode_pp, titulo: 'Cambio de idioma en MakeCode', descripcion: this.descripciones.makecode_pp_2, imagen: this.imagenes.makecode_pp_2}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_pp_3', anterior: 'makecode_pp_2', cabecera: this.cabeceras.makecode_pp, titulo: 'Primeros pasos y actividades', descripcion: this.descripciones.makecode_pp_3}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_pp_3o1', padre: 'makecode_pp_3', siguiente: 'makecode_pp_4', descripcion: 'Primeros pasos con micro:bit y Mis Ladrillos.'}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_pp_3o2', padre: 'makecode_pp_3', siguiente: 'makecode_pp_actividad', descripcion: 'Actividad inicial - Trio con brazo plástico.'}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_pp_4', anterior: 'makecode_pp_3', cabecera: 'Primeros pasos con micro:bit y Mis Ladrillos.', titulo: 'Guia básica de uso del ladrillo R8 Microbit', descripcion: this.descripciones.makecode_pp_4, enlace: this.enlaces.makecode_pp_4}))
      .agregarUnidad(new UnidadAsistente({id: 'makecode_pp_actividad', anterior: 'makecode_pp_3', cabecera: 'Actividad Microbit Trio con brazo', titulo: 'Actividad de armado y programación', descripcion: this.descripciones.makecode_pp_actividad, enlace: this.enlaces.makecode_pp_actividad}))
      //mblock
      .agregarUnidad(new UnidadAsistente({id: 'mblock', anterior: 'inicio', siguiente: 'mblock_1', cabecera: 'Requisitos', titulo: 'Requisitos necesarios la utilización de la plataforma mBlock', descripcion: this.descripciones.mblock, imagen: this.imagenes.makecode}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_1', anterior: 'mblock', cabecera: 'Instalación del mBlock', titulo: 'Selección del Sistema Operativo', descripcion: this.descripciones.mblock_1}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_o1', padre: 'mblock_1', siguiente: 'mblock_win', descripcion: 'Windows'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_o2', padre: 'mblock_1', siguiente: 'mblock_mac', descripcion: 'Mac'}))
      //.agregarUnidad(new UnidadAsistente({id: 'mblock_o3', padre: 'mblock', siguiente: 'mblock_lin', descripcion: 'GNU/Linux'}))
      //.agregarUnidad(new UnidadAsistente({id: 'mblock_o4', padre: 'mblock', siguiente: 'mblock_chr', descripcion: 'Chromebook'}))
      //mblock windows
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win', anterior: 'mblock', siguiente: 'mblock_win_1', cabecera: this.cabeceras.mblock_win, titulo: 'mBlock para Windows', descripcion: this.descripciones.mblock_win, enlace: this.enlaces.mblock_win}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_1', anterior: 'mblock_win', siguiente: 'mblock_win_2', cabecera: this.cabeceras.mblock_win, titulo: 'Instalación del mBlock. Paso 1 de 3', descripcion: this.descripciones.mblock_win_1}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_2', anterior: 'mblock_win_1', siguiente: 'mblock_win_3', cabecera: this.cabeceras.mblock_win, titulo: 'Instalación del mBlock. Paso 2 de 3', descripcion: this.descripciones.mblock_win_2}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_3', anterior: 'mblock_win_2', siguiente: 'mblock_win_4', cabecera: this.cabeceras.mblock_win, titulo: 'Instalación del mBlock. Paso 3 de 3', descripcion: this.descripciones.mblock_win_3}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_4', anterior: 'mblock_win_3', siguiente: 'mblock_win_5', cabecera: this.cabeceras.mblock_win_4, titulo: 'Ejecutando mBlock', descripcion: this.descripciones.mblock_win_4, imagen: this.imagenes.mblock_win_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_5', anterior: 'mblock_win_4', siguiente: 'mblock_win_6', cabecera: this.cabeceras.mblock_win_4, titulo: 'Reconociendo mBlock', descripcion: this.descripciones.mblock_win_5, imagen: this.imagenes.mblock_win_5}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_6', anterior: 'mblock_win_5', siguiente: 'mblock_win_7', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_6, descripcion: this.descripciones.mblock_win_6}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_7', anterior: 'mblock_win_6', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_6, descripcion: this.descripciones.mblock_win_7, imagen: this.imagenes.mblock_win_7}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_7o1', padre: 'mblock_win_7', siguiente: 'mblock_win_kb', descripcion: 'Kinderbot'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_7o2', padre: 'mblock_win_7', siguiente: 'mblock_win_r4', descripcion: 'R-400 STEAM en casa'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_7o3', padre: 'mblock_win_7', siguiente: 'mblock_win_r1', descripcion: 'Core R1'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_7o4', padre: 'mblock_win_7', siguiente: 'mblock_win_r2', descripcion: 'Core R2'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_7o5', padre: 'mblock_win_7', siguiente: 'mblock_win_r8', descripcion: 'Core R8'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_7o6', padre: 'mblock_win_7', siguiente: 'mblock_win_rp', descripcion: 'Core R8+'}))
      //mblock windows kinderbot
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb', anterior: 'mblock_win_7', siguiente: 'mblock_win_kb_1', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_6, descripcion: this.descripciones.mblock_win_6}))
      //mblock windwos r400
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r4', anterior: 'mblock_win_7', cabecera: this.cabeceras.mblock_win_4, titulo: 'R400 Steam en casa', descripcion: this.descripciones.mblock_win_r4, imagen: this.imagenes.mblock_win_r4, enlace: this.enlaces.mblock_win_r4}))
      //mblock windows r1
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r1', anterior: 'mblock_win_7', siguiente: 'mblock_win_r1_1', cabecera: this.cabeceras.mblock_win_4, titulo: 'El Core R1', descripcion: this.descripciones.mblock_win_r1, imagen: this.imagenes.mblock_win_r1}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r1_1', anterior: 'mblock_win_r1', siguiente: 'mblock_win_r1_2', cabecera: this.cabeceras.mblock_win_4, titulo: 'Quitando el dispositivo Codey', descripcion: this.descripciones.mblock_win_r1_1, imagen: this.imagenes.mblock_win_r1_1}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r1_2', anterior: 'mblock_win_r1_1', siguiente: 'mblock_win_r1_3', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r1_2, descripcion: 'Descargamos la última versión de la extensión del Core R1', enlace: this.enlaces.mblock_win_r1_2}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r1_3', anterior: 'mblock_win_r1_2', siguiente: 'mblock_win_r1_4', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r1_2, descripcion: this.descripciones.mblock_win_r1_3}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r1_4', anterior: 'mblock_win_r1_3', siguiente: 'mblock_win_r1_5', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r1_2, descripcion: this.descripciones.mblock_win_r1_4, imagen: this.imagenes.mblock_win_r1_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r1_5', anterior: 'mblock_win_r1_4', cabecera: this.cabeceras.mblock_win_4, titulo: 'Felicidades', descripcion: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.', enlace: this.enlaces.mblock_win_r1_5}))
      //mblock windows r2
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r2', anterior: 'mblock_win_7', siguiente: 'mblock_win_r2_1', cabecera: this.cabeceras.mblock_win_4, titulo: 'El Core R2', descripcion: this.descripciones.mblock_win_r2, imagen: this.imagenes.mblock_win_r2}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r2_1', anterior: 'mblock_win_r2', siguiente: 'mblock_win_r2_2', cabecera: this.cabeceras.mblock_win_4, titulo: 'Quitando el dispositivo por defecto', descripcion: this.descripciones.mblock_win_r2_1, imagen: this.imagenes.mblock_win_r1_1}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r2_2', anterior: 'mblock_win_r2_1', siguiente: 'mblock_win_r2_3', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r2_2, descripcion: this.descripciones.mblock_win_r2_2, imagen: this.imagenes.mblock_win_r1_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r2_3', anterior: 'mblock_win_r2_2', siguiente: 'mblock_win_r2_4', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r2_2, descripcion: this.descripciones.mblock_win_r2_3, imagen: this.imagenes.mblock_win_r2_3}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r2_4', anterior: 'mblock_win_r2_3', siguiente: 'mblock_win_r2_5', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r2_2, descripcion: this.descripciones.mblock_win_r2_4, imagen: this.imagenes.mblock_win_r2_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r2_5', anterior: 'mblock_win_r2_4', siguiente: 'mblock_win_r2_6', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r2_2, descripcion: this.descripciones.mblock_win_r2_5, imagen: this.imagenes.mblock_win_r2_5}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r2_6', anterior: 'mblock_win_r2_5', cabecera: this.cabeceras.mblock_win_4, titulo: 'Felicidades', descripcion: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.', imagen: this.imagenes.mblock_win_r2_6, enlace: this.enlaces.mblock_win_r1_5}))
      //mblock windows r8
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r8', anterior: 'mblock_win_7', siguiente: 'mblock_win_r8_1', cabecera: this.cabeceras.mblock_win_4, titulo: 'El Core R8', descripcion: this.descripciones.mblock_win_r8, imagen: this.imagenes.mblock_win_r8, enlace: this.enlaces.mblock_win_r8}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r8_1', anterior: 'mblock_win_r8', siguiente: 'mblock_win_r8_2', cabecera: this.cabeceras.mblock_win_4, titulo: 'Quitando el dispositivo Codey', descripcion: this.descripciones.mblock_win_r8_1, imagen: this.imagenes.mblock_win_r8_1}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r8_2', anterior: 'mblock_win_r8_1', siguiente: 'mblock_win_r8_3', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r8_2, descripcion: 'Una vez quitado el dispositivo por defecto, haremos clic sobre el botón "Añadir".', imagen: this.imagenes.mblock_win_r1_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r8_3', anterior: 'mblock_win_r8_2', siguiente: 'mblock_win_r8_4', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r8_2, descripcion: this.descripciones.mblock_win_r8_3, imagen: this.imagenes.mblock_win_r8_3}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r8_4', anterior: 'mblock_win_r8_3', siguiente: 'mblock_win_r8_5', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r8_2, descripcion: this.descripciones.mblock_win_r8_4, imagen: this.imagenes.mblock_win_r8_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r8_5', anterior: 'mblock_win_r8_4', siguiente: 'mblock_win_r8_6', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r8_2, descripcion: this.descripciones.mblock_win_r2_5, imagen: this.imagenes.mblock_win_r8_5}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_r8_6', anterior: 'mblock_win_r8_5', cabecera: this.cabeceras.mblock_win_4, titulo: 'Felicidades', descripcion: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.', imagen: this.imagenes.mblock_win_r8_6, enlace: this.enlaces.mblock_win_r8_6}))
      //mblock windows r8+
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_rp', anterior: 'mblock_win_7', siguiente: 'mblock_win_rp_1', cabecera: this.cabeceras.mblock_win_4, titulo: 'El Core R8+', descripcion: this.descripciones.mblock_win_rp, imagen: this.imagenes.mblock_win_rp}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_rp_1', anterior: 'mblock_win_rp', siguiente: 'mblock_win_rp_2', cabecera: this.cabeceras.mblock_win_4, titulo: 'Quitando el dispositivo Codey', descripcion: this.descripciones.mblock_win_r8_1, imagen: this.imagenes.mblock_win_r8_1}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_rp_2', anterior: 'mblock_win_rp_1', siguiente: 'mblock_win_rp_3', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_rp_2, descripcion: 'Una vez quitado el dispositivo por defecto, haremos clic sobre el botón "Añadir".', imagen: this.imagenes.mblock_win_r1_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_rp_3', anterior: 'mblock_win_rp_2', siguiente: 'mblock_win_rp_4', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r8_2, descripcion: this.descripciones.mblock_win_rp_3, imagen: this.imagenes.mblock_win_rp_3}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_rp_4', anterior: 'mblock_win_rp_3', siguiente: 'mblock_win_rp_5', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r8_2, descripcion: this.descripciones.mblock_win_rp_4, imagen: this.imagenes.mblock_win_rp_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_rp_5', anterior: 'mblock_win_rp_4', siguiente: 'mblock_win_rp_6', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_r8_2, descripcion: this.descripciones.mblock_win_r2_5, imagen: this.imagenes.mblock_win_r2_3}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_rp_6', anterior: 'mblock_win_rp_5', siguiente: 'mblock_win_rp_7', cabecera: this.cabeceras.mblock_win_4, titulo: 'Actualización de seguridad del Core R8+', descripcion: this.descripciones.mblock_win_rp_6, enlace: this.enlaces.mblock_win_rp_6}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_rp_7', anterior: 'mblock_win_rp_6', cabecera: this.cabeceras.mblock_win_4, titulo: 'Felicidades', descripcion: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar.', imagen: this.imagenes.mblock_win_rp_7, enlace: this.enlaces.mblock_win_rp_7}))
      //mblock windows kinderbot
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb', anterior: 'mblock_win_7', siguiente: 'mblock_win_kb_1', cabecera: this.cabeceras.mblock_win_4, titulo: 'Kinderbot', descripcion: this.descripciones.mblock_win_kb}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_1', anterior: 'mblock_win_kb', siguiente: 'mblock_win_kb_2', cabecera: this.cabeceras.mblock_win_4, titulo: 'Quitando el dispositivo Codey', descripcion: this.descripciones.mblock_win_r8_1, imagen: this.imagenes.mblock_win_r8_1}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_2', anterior: 'mblock_win_kb_1', siguiente: 'mblock_win_kb_3', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_kb_2, descripcion: 'Descargamos la última versión del Kinderbot', enlace: this.enlaces.mblock_win_kb}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_3', anterior: 'mblock_win_kb_2', siguiente: 'mblock_win_kb_4', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_kb_2, descripcion: this.descripciones.mblock_win_kb_3}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_4', anterior: 'mblock_win_kb_3', siguiente: 'mblock_win_kb_5', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_kb_2, descripcion: this.descripciones.mblock_win_kb_4, imagen: this.imagenes.mblock_win_r1_4}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_5', anterior: 'mblock_win_kb_4', siguiente: 'mblock_win_kb_6', cabecera: this.cabeceras.mblock_win_4, titulo: this.titulos.mblock_win_kb_2, descripcion: this.descripciones.mblock_win_r2_5}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_6', anterior: 'mblock_win_kb_5', cabecera: this.cabeceras.mblock_win_4, titulo: 'Felicidades', descripcion: 'Felicitaciones, ya ha finalizado todo lo necesario para comenzar a programar. Elija alguna opción para continuar'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_6a', padre: 'mblock_win_kb_6', anterior: 'mblock_win_kb_6', siguiente: 'mblock_win_kb_6a1', descripcion: 'Primeros pasos'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_6b', padre: 'mblock_win_kb_6', anterior: 'mblock_win_kb_6', siguiente: 'mblock_win_kb_6b1', descripcion: 'Actividades'}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_6a1', anterior: 'mblock_win_kb_6', cabecera: this.cabeceras.mblock_win_4, titulo: 'Primeros Pasos', descripcion: this.descripciones.mblock_win_kb_6a1, enlace: this.enlaces.mblock_win_kb_pp}))
      .agregarUnidad(new UnidadAsistente({id: 'mblock_win_kb_6b1', anterior: 'mblock_win_kb_6', cabecera: this.cabeceras.mblock_win_4, titulo: 'Actividades', descripcion: this.descripciones.mblock_win_kb_6b1, enlace: this.enlaces.mblock_win_kb_6}))
      //mblock mac
      .agregarUnidad(new UnidadAsistente({id: 'mblock_mac', anterior: 'mblock', cabecera: this.cabeceras.mblock_mac, titulo: 'mBlock para Mac', descripcion: 'Para poder descargar el mBlock para MAC, por favor, haz clic en el botón "Descargar"', enlace: this.enlaces.mblock_mac}))
      .iniciarAsistente();
  }

  ngOnInit(): void {
  }
  
  next() {
    this.datosActual = this.asistente.siguiente();
  }

  back() {
    this.datosActual = this.asistente.anterior();
  }

  download(object){
    open(object.link)
  }

  goto(link: string){
    open(link, '_blank');
  }
  volver_inicio(){
    this.datosActual = this.asistente.reiniciarAsistente();

  }
  clickOpcion(idOpcion){
    this.asistente.actualizar(idOpcion);
  }

  tieneAnterior(): boolean {
    return this.datosActual.anterior.length != 0 ? true : false;
  }

  tieneSiguiente(): boolean {
    return this.datosActual.siguiente.length != 0 || this.datosActual.hijos.length != 0 ? true : false;
  }

  tieneEnlace(): boolean {
    return this.datosActual.enlace.enlace.length ? true : false;
  }
}

