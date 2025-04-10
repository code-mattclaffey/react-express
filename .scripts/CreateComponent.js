const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const args = process.argv.slice(2);
const componentName = args[0];

const dirname = path.join(__dirname, '../.template');
const folderPath = path.join(__dirname, '../src/components', componentName);
const htmlCase = componentName.split(/(?=[A-Z])/).join('-').toLowerCase();

fs.mkdirSync(folderPath, { recursive: true });

const getFiles = (dir, files = []) => {
    // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir)
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`

    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files)
    } else {
      // If it is a file, push the full path to the files array
      files.push(name)
    }
  }
  return files
}

const checkIfFileHasSubfolder = (file) => {
  const templatePath = file.split('.template');
  const subFolders = templatePath[1].split('/');
  // ['', 'stories', 'ComponentName.stories.tsx']
  const isSubFolder = subFolders.length >= 3;

  if (isSubFolder) {
    fs.mkdirSync(path.join(folderPath, subFolders[1]), { recursive: true });
  }
}

const fsWriteFile = (file, contents) => {
  fs.writeFile(file, contents, (err) => {
    if (err) {
      console.log(chalk.bgRed(err));
      console.log(chalk.bgRed(`Unable to write file: ${file}`));
      return;
    }

    console.log(chalk.bgGreen(`New file created: ${file}`));
  });
}

const writeToFile = (file, contents) => {
  const fileName = file.split('.template').reverse()[0];

  // Use replace with a global flag to replace all occurrences
  contents = contents
    .replace(/component-name/g, htmlCase)
    .replace(/ComponentName/g, componentName);

  const newFileName = fileName.replace('ComponentName', componentName);
  const filePath = path.join(folderPath, newFileName);

  fsWriteFile(filePath, contents);
} 

const writeFiles = (files) => {
  files.forEach(file => {
    checkIfFileHasSubfolder(file)
    
    fs.readFile(file, 'utf-8', (err, contents) => {
      if (err) {
        console.error(chalk.bgRed(err));
        return;
      }

      writeToFile(file, contents);
    });
  });
};

const writeToComponentBarrelFile = () => {
  const barrelFile = path.join(__dirname, '../src/components/index.ts');

  fs.readFile(barrelFile, 'utf-8', (err, contents) => {
    if (err) {
      console.error(chalk.bgRed(err));
      return;
    }

    contents += `export * from './${componentName}'`;

    fsWriteFile(barrelFile, contents);
  });
};

const init = () => {
  writeFiles(getFiles(dirname));
  writeToComponentBarrelFile();
}


init();
