const routes = require('next-routes')();
// có 2 ngoặc tròn ở đây có nghĩa là câu lệnh require với dấu ngoặc tròn đầu tiên
// sẽ return về 1 function và dấu ngoặc tròn tiếp theo dùng để ngay lập tức gọi function
// đó
routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;

// Có 1 vấn đề lớn ở đây là khi bạn nhập bất cứ ký tự gì đằng sau /campaigns/kí tự
// thì nó vẫn nghĩ là đi đến page show, do vậy cần thêm các đường dẫn chính xác khác
// vào
