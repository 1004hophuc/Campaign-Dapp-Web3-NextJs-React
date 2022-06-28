'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3.js');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), "0x08233f982c46Cc4851a52d4d1408C2f75ea2954C");

exports.default = instance;

// Muốn tạo 1 instance của CampaignFactory thì đầu tiên cần interface của nó,
// và tham số thứ 2 là địa chỉ mà nó đã deploy lên

// Trước giờ chúng ta chưa thực sự tạo ra 1 instance của CampaignFactory, bây
// giờ ta sẽ sử dụng remix để tạo ra 1 instance của CampaignFactory, để sau
// này có thể lấy được danh sách của các instance CampaignFactory đã deployed

// Sau đó dùng IDE Remix để tạo ra, lưu ý là sử dụng enviroment Injected Web3
// phải dùng của Rinkeby
// Chọn contract để deploy là CampaignFactory
// Sau đó ở At address ta sẽ paste address của CampaignFactory mà ta đã deployed
// trong Atom vào
// Tạo 1 campaign với tối thiểu 100wei, sau đó getDeployedCampaigns bạn sẽ nhận
// được address của campaign đã được create đó
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQURlLFlBRWYsQUFGZSxBQUFqQixBQUtBOztrQkFBZSxBQUFmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BodWNoby9Eb2N1bWVudHMvRnVuaXgvUHJhY3RpY2UvQ2FtcGFpZ25BdG9tRWRpdG9yIn0=