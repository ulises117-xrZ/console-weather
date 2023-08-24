const { pause, inquirerMenu, readInputG } = require("./helpers/inquirers");


const main = async () => {
    let option = '';

    while(option !== '0'){

        option = await inquirerMenu();
        console.log(option);
        switch (option) {
            case '1':
                const place = await readInputG('Ingresa el lugar: ');
                break;
            case '2':
                //mostrar historial de busqueda
            default:
                break;
        }
        await pause();
    }
}

main();