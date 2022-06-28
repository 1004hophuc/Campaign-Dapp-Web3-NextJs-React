const { createServer } = require('http');
const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if(err) throw err;
    console.log('Ready on localhost:3000')
  });
});

// Đảm bảo rằng chạy trên môi trường dev

// Mục đích của file server để chúng ta có thể khởi động ứng dụng nextjs theo cách
// thủ công và đặc biệt yêu cầu nó sử dụng file route.js

// Trước đây khi chưa có route và server thì app sẽ chạy luôn ứng dụng, các package
// dev: next dev
// Bây giờ khi sài routes với server thì vào package.json sửa lại dev để chúng ta
// muốn chỉnh sửa cách next hoạt động
// Bây giờ khi ta chạy npm run dev thì nó sẽ chạy file server để kiểm tra routing
// dev: node server.js
