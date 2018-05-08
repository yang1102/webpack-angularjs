const gulp = require('gulp');
const glob = require('glob');
const { spawn } = require('child_process');
const { resolve } = require('path');

gulp.task('build', buildPackage);
buildPackage.description = 'build package';

function executeCommand(command, cwd) {
  const build = spawn('yarn.cmd', ['run', command], {cwd});

  console.log(`run command ${command} \n cwd: ${cwd}`);
  build.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  build.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  build.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

function buildPackage() {
  let files = glob.sync('./packages/*');
  files.forEach(filePath => {
    executeCommand('build', resolve(__dirname, filePath));
  });
}

