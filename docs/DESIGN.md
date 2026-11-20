# Thiết kế

## Ý tưởng
Giấy sage nhạt, mực xanh rêu đậm, một điểm nhấn vàng nghệ. Điểm nhớ duy nhất là tiêu đề hero cỡ lớn, các phần còn lại giữ yên tĩnh.

## Token
| Tên | Sáng | Tối | Vai trò |
|---|---|---|---|
| `--bg` | #E9EFE6 | #10231F | Nền |
| `--ink` | #14302B | #E9EFE6 | Chữ chính |
| `--muted` | #4D6560 | #9FB5AC | Chữ phụ |
| `--line` | #B9C8BE | #2C4540 | Đường kẻ |
| `--accent` | #F2B632 | #F2B632 | Nút chính |
| `--status` | #257A47 | #2E9E5B | Chấm trạng thái |

## Chữ
- Tiêu đề: Bricolage Grotesque 800, letter-spacing âm
- Nội dung: Be Vietnam Pro 400/500, hỗ trợ đầy đủ dấu tiếng Việt
- Cỡ tiêu đề hero co giãn bằng `clamp()`

## Bố cục
Một cột, rộng tối đa 62rem, căn trái. Mỗi mục ngăn cách bằng một đường kẻ. Dự án và kỹ năng dùng lưới hai cột (tên | mô tả), thu về một cột dưới 640px.

## Chuyển động
Chỉ chấm trạng thái nhấp nháy và nút nhích lên 2px khi hover. Tắt hết khi `prefers-reduced-motion`.

## Chất lượng
Tương phản AA, focus rõ, hoạt động từ 360px.
