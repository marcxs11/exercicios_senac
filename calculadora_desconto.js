import { number, select } from "@inquirer/prompts";

let preço = await number({ message: 'Valor da compra?', 
    required: true, });

const forma = await select({
    message: 'Qual a forma de pagamento?',
    choices: [
        { name: 'Pix (10% de desconto)', value: 'A' },
        { name: 'Cartão a vista (5% de desconto)', value: 'B' },
        { name: 'Cartão parcelado (Sem desconto)', value: 'C' }
    ]
});

switch (forma) {
    case 'A':
        let pixd = preço / 10;
        let pcd = preço - pixd;

        console.log("Pix selecionado! Preço: " + pcd + "R$");
        break;

    case 'B':
        let cartd = preço / 10;
        let cartd2 = cartd / 2;
        let ccd = preço - cartd2;

        console.log("Cartão a vista selecionado! Preço: " + ccd + "R$");
        break;

    case 'C':
        const parcela = await select ({
            message: "Quantas parcelas?",
            choices: [
                { name: '2 parcelas de '+ preço / 2 + "R$", value: '2deX' },
                { name: '3 parcelas de '+ preço / 3 + "R$", value: '3deX' },
                { name: '4 parcelas de '+ preço / 4 + "R$", value: '4deX' },
                { name: '5 parcelas de '+ preço / 5 + "R$", value: '5deX' },
                { name: '6 parcelas de '+ preço / 6 + "R$", value: '6deX' },
                { name: '12 parcelas de '+ preço / 12 + "R$", value: '12deX' }
            ]
        })};
