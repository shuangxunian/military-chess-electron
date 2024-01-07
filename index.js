const { spawn } = require('child_process');
const path = require('path');
const chessPath = path.join(__dirname, 'chess') + '\\2.exe'

// 启动外部exe程序
const childProcess0 = spawn(chessPath);
const childProcess1 = spawn(chessPath);

// 监听外部程序的标准输出
childProcess0.stdout.on('data', (data) => {
  console.log('先手输出' + data);
});

// 向外部程序发送数据
// childProcess0.stdin.write('INFO 1.0\n');

// 监听外部程序的标准错误输出
childProcess0.stderr.on('data', (data) => {
  console.error('外部程序错误：' + data);
});

// 监听外部程序的退出事件
childProcess0.on('exit', (code) => {
  console.log('外部程序退出，退出码：' + code);
});



// 监听外部程序的标准输出
childProcess1.stdout.on('data', (data) => {
  console.log('后手输出' + data);
});

// 向外部程序发送数据
// childProcess1.stdin.write('INFO 1.0\n');


// 监听外部程序的标准错误输出
childProcess1.stderr.on('data', (data) => {
  console.error('外部程序错误：' + data);
});

// 监听外部程序的退出事件
childProcess1.on('exit', (code) => {
  console.log('外部程序退出，退出码：' + code);
});

const main = async () => {
  childProcess0.stdin.write('INFO 1.0\n');
  childProcess1.stdin.write('INFO 1.0\n');

}

main()



