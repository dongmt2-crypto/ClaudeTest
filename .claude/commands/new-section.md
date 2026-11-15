---
description: Thêm một mục mới vào landing page theo đúng hệ thống thiết kế
argument-hint: <tên mục> [mô tả nội dung]
allowed-tools: Read, Edit
---
Thêm mục mới "$ARGUMENTS" vào `index.html`.

1. Đọc `CLAUDE.md`, `docs/DESIGN.md` và `docs/CONTENT.md`.
2. Chèn `<section id="...">` với `<h2>` trước `#lien-he`, id là tiếng Việt không dấu.
3. Dùng lại class sẵn có. Nếu cần CSS mới, chỉ dùng biến ở `:root`.
4. Thêm liên kết vào `<nav>` nếu mục là điều hướng chính.
5. Viết nội dung mẫu bằng tiếng Việt theo giọng văn trong `CONTENT.md`.
6. Báo lại những gì đã đổi bằng 3 dòng.
