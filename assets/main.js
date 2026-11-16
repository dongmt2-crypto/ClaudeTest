// Đồng hồ giờ TP.HCM. Không có dependency.
const clock = document.getElementById('clock');
if (clock) {
  function tick() {
    clock.textContent = new Date().toLocaleTimeString('vi-VN', {
      hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh'
    });
  }
  tick();
  setInterval(tick, 30000);
}
