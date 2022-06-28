import web3 from './web3';
import Campaign from './build/Campaign.json';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    address
  )
};

// Muốn tạo 1 instance của CampaignFactory thì đầu tiên cần interface của nó,
// và tham số thứ 2 là địa chỉ mà nó đã deploy lên
