# Landing page cá nhân

Trang giới thiệu cá nhân một cột, thuần HTML/CSS/JS, thiết kế sẵn để làm việc cùng Claude Code.

## Chạy thử
```bash
python3 -m http.server 8000
```
Mở http://localhost:8000.

## Tùy biến nhanh
1. Sửa tên, mô tả, dự án trong `index.html` (đã có sẵn nội dung mẫu).
2. Đổi màu ở khối `:root` trong `assets/style.css`.
3. Thay email và các liên kết trong mục `#lien-he`.

## Làm việc với Claude Code
```bash
cd landing-ca-nhan
claude
```
Lệnh có sẵn: `/new-section`, `/update-content`, `/audit`.
Subagent: `design-reviewer`, `copywriter`. Chi tiết ở `CLAUDE.md`.

## Triển khai
Đẩy lên GitHub, vào Settings, Pages, chọn nhánh `main` và thư mục gốc.

## Giấy phép
MIT
