const { pause, inquirerMenu } = require("./helpers/inquirers");


const main = async () => {
    let option = '';

    while(option !== '0'){

        option = await inquirerMenu();
        console.log(option);

        await pause();
    }
}

main();