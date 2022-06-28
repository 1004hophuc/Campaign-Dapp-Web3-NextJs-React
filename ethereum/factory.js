import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x08233f982c46Cc4851a52d4d1408C2f75ea2954C"
);

export default instance;

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
