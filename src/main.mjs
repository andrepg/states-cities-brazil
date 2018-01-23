import fs from 'fs';
import download from 'download-file';
import unzip from 'unzip';

const TMP_PATH = './tmp/';
const ZIP_FILE = 'dtb_2015.zip';
const IBGE_DATA = `https://geoftp.ibge.gov.br/organizacao_do_territorio/estrutura_territorial/divisao_territorial/2015/${ ZIP_FILE }`;

download(IBGE_DATA, {
	directory: TMP_PATH,
	filename: ZIP_FILE
}, (err) => {

	if (err) {
		throw err;
	}

	fs.createReadStream(`${ TMP_PATH }/${ ZIP_FILE }`).pipe(unzip.Extract({
		path: TMP_PATH
	}));

});
