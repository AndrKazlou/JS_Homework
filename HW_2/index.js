const fse = require('fs-extra');

//fse.ensureDirSync('./Folder1');
fse.ensureFileSync('./Folder1/file');
fse.moveSync('./Folder1/file', './Folder2/file');
fse.copySync('./Folder2/file', './Folder3/file');
fse.removeSync('./Folder2/file');
fse.removeSync('./Folder3/file');
fse.removeSync('./Folder1');
fse.removeSync('./Folder2');
fse.removeSync('./Folder3');