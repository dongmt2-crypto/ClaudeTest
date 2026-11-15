# Landing page cá nhân — DongMT

Trang một cột giới thiệu cá nhân: hero, dự án, kỹ năng, hành trình, liên hệ.
Site tĩnh, không build step, không framework. Mở `index.html` là chạy.

## Cấu trúc
- `index.html` — toàn bộ nội dung, ngữ nghĩa HTML5
- `assets/style.css` — design token ở `:root`, hỗ trợ dark mode bằng `prefers-color-scheme`
- `assets/main.js` — chỉ có đồng hồ giờ TP.HCM
- `docs/DESIGN.md` — token, typography, nguyên tắc thiết kế (đọc trước khi sửa CSS)
- `docs/CONTENT.md` — giọng văn và quy tắc viết nội dung

## Lệnh
- Chạy thử: `python3 -m http.server 8000` rồi mở http://localhost:8000
- Kiểm tra link và HTML: `npx --yes html-validate index.html`
- Triển khai: `/deploy`-style thủ công qua GitHub Pages (xem README)

## Quy ước bắt buộc
- Nội dung tiếng Việt, câu sentence case, dùng dấu đầy đủ. Không viết hoa toàn bộ nhãn.
- Màu và font chỉ dùng biến CSS ở `:root`. Không hard-code mã màu trong rule.
- Không thêm thư viện JS/CSS ngoài. Font Google là ngoại lệ duy nhất.
- Mọi tương tác phải dùng được bằng bàn phím và có `:focus-visible`.
- Tôn trọng `prefers-reduced-motion`. Chỉ có một chuyển động chủ động: chấm trạng thái.
- Responsive từ 360px. Dòng chữ không quá 80 ký tự.
- Ảnh phải có `alt`; ảnh trang trí dùng `alt=""`.

## Đừng làm
- Đừng bọc nội dung thành lưới thẻ giống nhau có bóng đổ.
- Đừng thêm nhãn IN HOA nhỏ phía trên tiêu đề.
- Đừng đổi tên file hoặc thư mục `assets/` mà không cập nhật `index.html`.

## Sau mỗi thay đổi
Chạy `/audit`, rồi cập nhật `CHANGELOG.md`.
