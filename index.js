const { pause, inquirerMenu, readInputG } = require("./helpers/inquirers");
const SearchH = require("./models/Search");


const main = async () => {
    let option = '';
    const searches = new SearchH();

    while(option !== '0'){

        option = await inquirerMenu();
        console.log(option);
        switch (option) {
            case '1':
                const place = await readInputG('Ingresa el lugar: ');
               await searches.searchCity(place);
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