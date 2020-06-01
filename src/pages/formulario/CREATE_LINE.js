/*
    13 é a nota fiscal,
    21 é a data com hora,
    31 é o índice do CNPJ da empresa,
    32 é o DACTE, A partir do 27º digito e contém 8 characteres
*/
import { statuses } from './statuses';

export const create_line = async (item) => { 
    var nfs = [];
    var string = '';
    var initial_code = '542';
    var cnpj;
    var digit_nf;
    var nf_without_digit;
    var date;
    var hours;
    var DACTE;

    // console.log(item.NOTAFISCAL, item.DATA_EVENTO, item.CNPJ, item.DACTE)

    return new Promise( async (resolve) => {
        var item_status = statuses()[item.STATUS];

        if (item.STATUS !== null && item.STATUS !== undefined && item.DACTE !== undefined && item_status !== null && item_status !== undefined) {
            cnpj = item.CNPJ;
            nfs = await item.NOTAFISCAL.includes('/') ? 
                item.NOTAFISCAL.split('/') :
                [item.NOTAFISCAL];
            
            let date_not_formatted = (item.DATA_EVENTO.split(' '))[0];  // Formatando a data
            let date_fields = date_not_formatted.split('/');    // Formatando a data
            date = `${ date_fields[0] }${ date_fields[1] }${ date_fields[2] }`; // Formatando a data

            let hours_not_formatted = (item.DATA_EVENTO.split(' '))[1]; // Formatando a horas
            let hours_field = hours_not_formatted.split(':');   // Formatando a horas
            hours = `${ hours_field[0] }${ hours_field[1] }`;   // Formatando a horas
            
            DACTE = item.DACTE.substring(26, 34);

            nfs.forEach( async (nf, index) => {    // Montar cada linha aqui dentro
                digit_nf = (nf.split('-'))[1];
                nf_without_digit = (nf.split('-'))[0];

                new Promise( async (resolve2) => {

                    string = string + `${ initial_code }${ cnpj }${ digit_nf }  0000${ nf_without_digit }${ statuses()[item.STATUS] }${ date }${ hours }00                                                                                00000000010    ${ DACTE }                                                                                                     \n`;
                    resolve2(string);

                }).then( async (res) => {

                    if (index === (nfs.length - 1)) {
                        // console.log(index, (nfs.length - 1), res)
                        await resolve(res);
                    }

                });                
                
            });
        }
    });
}   

