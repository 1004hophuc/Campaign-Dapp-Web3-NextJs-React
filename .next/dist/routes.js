'use strict';

var routes = require('next-routes')();
// có 2 ngoặc tròn ở đây có nghĩa là câu lệnh require với dấu ngoặc tròn đầu tiên
// sẽ return về 1 function và dấu ngoặc tròn tiếp theo dùng để ngay lập tức gọi function
// đó
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;

// Có 1 vấn đề lớn ở đây là khi bạn nhập bất cứ ký tự gì đằng sau /campaigns/kí tự
// thì nó vẫn nghĩ là đi đến page show, do vậy cần thêm các đường dẫn chính xác khác
// vào
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQ0ssQUFETCxJQUNTLEFBRFQsa0JBQzJCLEFBRDNCLGtCQUVLLEFBRkwsSUFFUyxBQUZULHVCQUVnQyxBQUZoQyxtQkFHSyxBQUhMLElBR1MsQUFIVCxnQ0FHeUMsQUFIekMsNkJBSUssQUFKTCxJQUlTLEFBSlQsb0NBSTZDLEFBSjdDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQjs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waHVjaG8vRG9jdW1lbnRzL0Z1bml4L1ByYWN0aWNlL0NhbXBhaWduQXRvbUVkaXRvciJ9