const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
// Xoá buildPath đi, vì mỗi lần ta compile lại thì nó sẽ tự động reset
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

const output = solc.compile(source, 1).contracts;

// Nếu buildPath không tồn tại thì sẽ tạo ra nó
fs.ensureDirSync(buildPath);

// Tạo vòng lặp cho object output, vì sẽ có nhiều contract được compiler
// Lấy từng contract sau khi compiler và sau đó đưa vào file builder để sau này dùng

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
