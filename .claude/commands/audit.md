---
description: Kiểm tra chất lượng trang trước khi commit
allowed-tools: Read, Bash(npx --yes html-validate:*), Bash(git diff:*)
---
Thực hiện lần lượt:

1. Chạy `npx --yes html-validate index.html` và liệt kê lỗi.
2. Kiểm tra `assets/style.css`: có mã màu hard-code ngoài `:root` không?
3. Kiểm tra truy cập: thứ tự heading, `alt` của ảnh, `lang="vi"`, focus-visible.
4. Gọi subagent `design-reviewer` xem diff hiện tại.
5. Trả về bảng ngắn: mục | đạt/không | cách sửa.
