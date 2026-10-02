import { number, select } from "@inquirer/prompts";

let preço = await number({ message: 'Valor da compra?', 
    min: 10,
    max: 1000,
    required: true,
});

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
        let cartd = preço / 5;
        let ccd = preço - cartd;

        console.log("Cartão a vista selecionado! Preço: " + ccd + "R$");
        break;
    case 'C':
        console.log("Cartão parcelado selecionado: Nenhum desconto aplicado.");
        break;


        
        // default:
        //     console.log("Opção desconhecida.");
}
