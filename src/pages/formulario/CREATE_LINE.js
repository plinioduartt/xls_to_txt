/*
    13 é a nota fiscal,
    21 é a data com hora,
    31 é o índice do CNPJ da empresa,
    32 é o DACTE, A partir do 27º digito e contém 8 characteres
*/

var initial_code = '542';
var nfs;
var cnpj;
var string = '';
var digit_nf;
var nf_without_digit;
var date;
var hours;
var DACTE;


module.exports = { 
    async create(item) { 
        return new Promise( async (resolve) => {
            if (item[16] === "ENTREGUE") {  // Cria a linha só se o status for igual a ENTREGUE
                cnpj = item[31];
                nfs = await item[13].includes('/') ? 
                item[13].split('/') :
                [item[13]];
                
                let date_not_formatted = (item[21].split(' '))[0];  // Formatando a data
                let date_fields = date_not_formatted.split('/');    // Formatando a data
                date = `${ date_fields[0] }${ date_fields[1] }${ date_fields[2] }`; // Formatando a data
    
                let hours_not_formatted = (item[21].split(' '))[1]; // Formatando a horas
                let hours_field = hours_not_formatted.split(':');   // Formatando a horas
                hours = `${ hours_field[0] }${ hours_field[1] }`;   // Formatando a horas
    
                DACTE = item[32].substring(26, 34);
    
                await nfs.forEach( async (nf, index) => {    // Montar cada linha aqui dentro
                    digit_nf = (nf.split('-'))[1];
                    nf_without_digit = (nf.split('-'))[0];
    
                    string = await `${ string }${ initial_code }${ cnpj }${ digit_nf }  0000${ nf_without_digit }001${ date }${ hours }00                                                                                00000000010    ${ DACTE }                                                                                                    \n`;
                    if (index === (nfs.length - 1)) {
                        await resolve(string);
                    }
                });
            }
        });
    }   
} 
