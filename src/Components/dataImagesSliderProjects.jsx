import img from './../assets/images/preview-testerphp.jpg';
import img2 from './../assets/images/preview-crud-users.jpg';
import img3 from './../assets/images/preview-dashboard-store.jpg';

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
        descriptionFR: `Une application qui compile le code que vous écrivez. Le code à compiler est exclusivement en PHP. L'application présente un bon design :
        Dans l'en-tête, il y a un titre qui fait référence à l'application et un panneau de contrôle où vous pouvez gérer, copier, redimensionner et compiler le code écrit ci-dessous.
        Sous ces panneaux, il y a deux boîtes. Le premier, à gauche, vous permet d'écrire du code comme vous le souhaitez, et le deuxième, à droite, affiche la sortie, qu'il s'agisse de succès ou d'erreurs.
        L'application est disponible sur toutes les plateformes : mobile, tablette et PC. Elle inclut des fonctionnalités supplémentaires pour les appareils mobiles. Lorsque vous écrivez du code et que vous appuyez sur le bouton de compilation, en raison de la hauteur de l'écran, une partie de la boîte de sortie se replie afin que l'utilisateur puisse faire défiler vers le bas et obtenir une bonne expérience.
        Fait avec: `,
        languages: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Bootstrap' }, { name: 'Flexbox' }, { name: 'JavaScript ES6' }, { name: 'PHP POO' }, , { name: 'MySQL' }],
        linksProjects: [{ webpage: 'https://testerphp.atwebpages.com/', github: 'https://github.com/ivanarganda/PHPTester' }]
    },
    {
        img: 'url(' + img2 + ')',
        title: 'CRUD users',
        descriptionENG: `An SPA app which consume an API REST with ReactJS & PHP. App loads users from database and you can create, update , delete them. It brings a table where you can manage them. They have their own buttons ( update and delete ). On click on each one it shows his correspond form where you´ll be able to manage user or delete it trought id.
        Each operation will request web service php whose folder is called ws-users which is hosted in github too. Made with:` ,
        descriptionES: `Una aplicación de SPA (Aplicación de Página Única) que consume una API REST utilizando ReactJS y PHP. La aplicación carga usuarios desde una base de datos y te permite crear, actualizar y eliminar usuarios. Presenta una tabla donde puedes gestionar a los usuarios, cada uno con sus propios botones de "Actualizar" y "Eliminar". Al hacer clic en cada uno de estos botones, se mostrará un formulario correspondiente donde podrás administrar al usuario o eliminarlo utilizando su ID.
        Cada operación realizará una solicitud al servicio web PHP que se encuentra en una carpeta llamada "ws-users", la cual está alojada en GitHub.
        Hecho con: ` ,
        descriptionFR: `Une application SPA (Single Page Application) qui consomme une API REST en utilisant ReactJS et PHP. L'application charge des utilisateurs depuis une base de données et vous permet de créer, mettre à jour et supprimer des utilisateurs. Elle présente un tableau où vous pouvez gérer les utilisateurs, chacun avec ses propres boutons "Mettre à jour" et "Supprimer". En cliquant sur chacun de ces boutons, un formulaire correspondant s'affichera où vous pourrez gérer l'utilisateur ou le supprimer en utilisant son ID.
        Chaque opération effectuera une requête vers le service web PHP situé dans un dossier appelé "ws-users", qui est hébergé sur GitHub.
        Réalisé avec: ` ,
        languages: [{ name: 'HTML5' }, { name: 'Bootstrap' }, { name: 'Flexbox' }, { name: 'React' }, { name: 'WS REST php' }, { name: 'MySQL' }],
        linksProjects: [{ webpage: 'https://crudspausers.atwebpages.com/', github: 'https://github.com/ivanarganda/crudusers' }]
    },
    {
        img: 'url(' + img3 + ')',
        title: 'Dashboard store',
        descriptionENG: `An app store where you can add products to cart and you login to save to favorites and share them other users. It shows a pretty sidebar left responsive due to 
            change of position from left to bottom with another design to fit according user experience. And a navbar which is fixed, besides scrolling it keeps being at his same position. Both are unchanged, so is an SPA app` ,
        descriptionES: `Una tienda de aplicaciones donde puedes agregar productos al carrito y iniciar sesión para guardarlos en favoritos y compartirlos con otros usuarios. Muestra una barra lateral izquierda atractiva y receptiva que cambia de posición de izquierda a abajo con otro diseño para adaptarse a la experiencia del usuario. Y una barra de navegación que permanece fija, incluso al desplazarse, se mantiene en la misma posición. 
        Ambas partes no cambian, por lo que es una aplicación de página única (SPA, por sus siglas en inglés). Hecho con: ` ,
        descriptionFR: `Une boutique d'applications où vous pouvez ajouter des produits au panier et vous connecter pour les sauvegarder en favoris et les partager avec d'autres utilisateurs. Elle présente une barre latérale gauche attrayante et réactive qui change de position de gauche à bas avec un autre design pour s'adapter à l'expérience de l'utilisateur. Et une barre de navigation qui reste fixe, même en faisant défiler, elle reste à la même position.
        Les deux parties ne changent pas, ce qui en fait une application à page unique (SPA, pour Single Page Application).
        Réalisé avec: ` ,
        languages: [{ name: 'HTML5' }, { name: 'Tailwind' }, { name: 'React' }, { name: 'WS Node js y Express' }, { name: 'Laravel' } , { name:'SSO' } , { name: 'WS REST Laravel' }, { name: 'MySQL' }],
        linksProjects: [{ webpage: 'https://igvtech.online/', github: 'https://github.com/ivanarganda/dashboard-store' }]
    }
];