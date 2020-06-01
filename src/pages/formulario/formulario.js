import React, { Component } from 'react';
import * as XLSX from 'xlsx';
import Loader from '../../assets/loader.gif';
import McLovin from '../../assets/mclovin.jpg';

import './formulario.css';
import upload_image from './../../assets/upload.png';
import { create_line } from './CREATE_LINE';

var string =             '000JADLOG LOGISTICA S.A               ELSYS EQUIPAMENTOS ELETRONICOS LTDA0101190000OCO502000000                                                                                                                                                           \n';
var second_line_string = '540OCORR502000000                                                                                                                                                                                                                                         \n';
var thirdy_line_string = '54104884082000135JADLOG LOGISTICA S.A                                                                                                                                                                                                                     \n'

string = `${ string }${ second_line_string }${ thirdy_line_string }`;


export default class Formulario extends Component {
    state = { 
        selected: false, 
        show_button: false,
        show_loader: false,
        file: null
    };

    async upload(e) {
        if (e.target.files[0] !== undefined) {
            this.setState({ show_loader: true });
        
            let name = e.target.files[0].name;
    
            if (!name.includes('.xls') && !name.includes('.xlsx')) {
                this.setState({ show_loader: false });
                return alert('Formato incorreto, Tente um arquivo XLS ou XLSX');
            } else {
                await this.setState({ file: e.target.files[0], selected: true, show_button: false });
    
                var dataParse;
                var reader = new FileReader();
                reader.onload = async (e) => {
                    var data = e.target.result;
                    let readedData = XLSX.read(data, {type: 'binary'});
                    const wsname = readedData.SheetNames[0];
                    const ws = readedData.Sheets[wsname];
            
                    /* Convert array to json*/
                    dataParse = XLSX.utils.sheet_to_json(ws, {header:0});
                    // delete dataParse[0]; // Removendo os nomes das colunas
                    // delete dataParse[dataParse.length-1];
                    // delete dataParse[dataParse.length-2];
                   
                    var timeout;
                    await dataParse.forEach( async (item, index) => {
                        clearTimeout(timeout);

                        let line = await create_line(item)
                        string = `${ string }${ line }`;
                    
                        timeout = setTimeout( async () => {
                            // if (index === (dataParse.length - 3)) {
                                // console.log('STRING', string);

                                await this.create_txt_file(string);
                                setTimeout( async () => {
                                    this.setState({ show_loader: false, show_button: true });
                                }, 3000);
                            // }
                        }, 2000);                       
                    });
        
                };
                reader.readAsBinaryString(this.state.file)
            }        
        }        
    }

    async create_txt_file(text) {
        var textFile = null,
        makeTextFile = function (text) {
            var data = new Blob([text], {type: 'text/plain'});
        
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }
            
            textFile = window.URL.createObjectURL(data);
            
            return textFile;
        };
    
        setTimeout(() => {
            var link = document.getElementById('downloadlink');
            text = text + '549                                                                                                                                                                                                                                                       \n';
            link.href = makeTextFile(text);
            link.style.display = 'block';
            string = '000JADLOG LOGISTICA S.A               ELSYS EQUIPAMENTOS ELETRONICOS LTDA0101190000OCO502000000                                                                                                                                                           \n';
            string = `${ string }${ second_line_string }${ thirdy_line_string }`;
        }, 3000);
    }

    render() {
        return (
            <div className="App">
                <p id="desenvolvido-por">Desenvolvido por</p>
                <div id="avatar">
                    {/* <img alt="" src={ McLovin } /> */}
                    <p>@MK3Digital</p>
                </div>

                <div className="App-header">
                    <p className="App-link">Upload da planilha (XLSX)</p>
                    <label for="file-upload" className="custom-file-upload">
                        <img alt="" src={ upload_image } />
                        { this.state.selected ? this.state.file.name : 'Nenhum arquivo selecionado' }
                    </label>
                    <input id="file-upload" className="upload-file" onChange={ (e) => this.upload(e) } type="file"/>
                    <img className={ this.state.show_loader ? 'active' : 'disabled' } id="loader" alt="" src={ Loader } />
                    <a href="" id="downloadlink" download={ this.state.selected ? `${ (this.state.file.name.split('.'))[0] }.txt`: 'test.txt' } className={ this.state.show_button ? 'active' : 'disabled'}>Download</a>
                </div>
            </div>
        );
    }
    
}