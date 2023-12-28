import img from './../assets/images/preview-testerphp.jpg';
import img2 from './../assets/images/preview-crud-users.jpg';

export const images = [
    {
        img: 'url(' + img + ')',
        title: 'Tester code of PHP',
        descriptionENG: `An app which compiles code you type. The code to compile is just PHP. The app brings you a good design: 
        on header a title which refers app, a control panel where you can manage, copy, change size and compilate the code written bellow.
        Bellow of these panels, it has two squares, first one on left you can type code whatever you want and the second one on right the output both success and error. 
        The app is available in both plataforms: movile, tablet and pc. Including extra functions for mobiles when you type code and press compile button. Due to height of screen, it wraps part of output square
        so that scrolls down to bring a good experience to user. Made with:` ,
        descriptionES: `Una aplicación que compila el código que escribes. El código a compilar es exclusivamente PHP. La aplicación presenta un buen diseño:
        En la cabecera, hay un título que hace referencia a la aplicación y un panel de control donde puedes gestionar, copiar, cambiar el tamaño y compilar el código escrito abajo.
        Debajo de estos paneles, hay dos cuadros. El primero, a la izquierda, te permite escribir código como desees, y el segundo, a la derecha, muestra la salida, tanto éxitos como errores.
        La aplicación está disponible en ambas plataformas: móvil, tablet y PC. Incluye funciones adicionales para dispositivos móviles. Cuando escribes código y presionas el botón de compilación, debido a la altura de la pantalla, parte del cuadro de salida se envuelve para que el usuario pueda desplazarse hacia abajo y obtener una buena experiencia.
        Hecho con:`,
        languages: [{ name: 'HTML5' }, { name: 'CSS3' } , { name: 'Bootstrap' } , { name: 'Flexbox' }, { name: 'JavaScript ES6' }, { name: 'PHP POO' },  , { name:'MySQL' }],
        linksProjects:[{ webpage:'https://testerphp.atwebpages.com/' , github:'https://github.com/ivanarganda/PHPTester' }]
    },
    {
        img: 'url(' + img2 + ')',
        title: 'CRUD users',
        descriptionENG: `An SPA app which consume an API REST with ReactJS & PHP. App loads users from database and you can create, update , delete them. It brings a table where you can manage them. They have their own buttons ( update and delete ). On click on each one it shows his correspond form where you´ll be able to manage user or delete it trought id.
        Each operation will request web service php whose folder is called ws-users which is hosted in github too. Made with:` ,
        descriptionES: `Una aplicación de SPA (Aplicación de Página Única) que consume una API REST utilizando ReactJS y PHP. La aplicación carga usuarios desde una base de datos y te permite crear, actualizar y eliminar usuarios. Presenta una tabla donde puedes gestionar a los usuarios, cada uno con sus propios botones de "Actualizar" y "Eliminar". Al hacer clic en cada uno de estos botones, se mostrará un formulario correspondiente donde podrás administrar al usuario o eliminarlo utilizando su ID.
        Cada operación realizará una solicitud al servicio web PHP que se encuentra en una carpeta llamada "ws-users", la cual está alojada en GitHub.
        Hecho con: ` ,
        languages: [{ name: 'HTML5' }, { name: 'Bootstrap' } , { name: 'Flexbox' } , { name: 'React' }, { name: 'WS REST php' }, { name:'MySQL' }],
        linksProjects:[{ webpage:'http://crudspausers.atwebpages.com/' , github:'https://github.com/ivanarganda/crudusers' }]
    }
];