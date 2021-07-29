/*
    13 é a nota fiscal,
    21 é a data com hora,
    31 é o índice do CNPJ da empresa,
    32 é o DACTE, A partir do 27º digito e contém 8 characteres
*/
import { statuses } from './updated_statuses';

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

    return new Promise(async (resolve, reject) => {
        var item_status = statuses(item.STATUS.toUpperCase());

        console.log('item_status', item_status)

        if (item.STATUS && item.DACTE && item_status) {
            cnpj = item.CNPJ;
            nfs = await item.NOTAFISCAL.includes('/') ?
                item.NOTAFISCAL.split('/') :
                [item.NOTAFISCAL];

            let date_not_formatted = (item.DATA_EVENTO.split(' '))[0];  // Formatando a data
            let date_fields = date_not_formatted.split('/');    // Formatando a data
            date = `${date_fields[0]}${date_fields[1]}${date_fields[2]}`; // Formatando a data

            let hours_not_formatted = (item.DATA_EVENTO.split(' '))[1]; // Formatando a horas
            let hours_field = hours_not_formatted.split(':');   // Formatando a horas
            hours = `${hours_field[0]}${hours_field[1]}`;   // Formatando a horas

            DACTE = item.DACTE.substring(26, 34);

            nfs.map(async (nf, index) => {    // Montar cada linha aqui dentro
                digit_nf = (nf.split('-'))[1];
                nf_without_digit = (nf.split('-'))[0];

                var nf_number_without_digit = nf_without_digit.length > 0 ?
                    `${new Array(10 - nf_without_digit.length).join('0')}${nf_without_digit}` :
                    'NFe_Invalida';
                const free_text_space = new Array(128 - 47).join(' ');
                const last_string = new Array(251 - 150).join(' ')

                // string = string + `${initial_code}${cnpj}${digit_nf}  0000${nf_without_digit}${item_status}${date}${hours}00                                                                              00000000010    ${DACTE}                                                                                                     \n`;

                string = string + `${initial_code}${cnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '')}${digit_nf}  ${nf_number_without_digit}${item_status}${date}${hours}00${free_text_space}00000000010    ${DACTE}${last_string}\n`

                if (index === (nfs.length - 1)) {
                    // console.log(index, (nfs.length - 1), res)
                    resolve(string);
                }
            });
        } else {
            const getErrorMessage = () => {
                if (!item.DACTE) {
                    return `Oops! Ocorreu um erro no CTE "${item.CTE}". O DACTE deste documento é inválido.`
                }

                if (!item.STATUS) {
                    return `Oops! Ocorreu um erro no CTE "${item.CTE}". O status deste documento é inválido.`
                }

                if (!item_status) {
                    return `Oops! Ocorreu um erro no CTE "${item.CTE}". O status "${item.STATUS}" não foi encontrado no banco de códigos.`
                }
            };

            reject({
                message: getErrorMessage()
            })
        }
    });
}

