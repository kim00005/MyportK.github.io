const body = document.body;
        const toggleBtn = document.getElementById('toggleBtn');
        const toggleSlider = document.getElementById('toggleSlider');
        
        // ตรวจสอบว่าผู้ใช้เคยเลือกโหมดใดไว้ก่อนหน้านี้หรือไม่
        const currentMode = localStorage.getItem('mode');
        
        // ถ้ามีการบันทึกโหมดไว้ ใช้โหมดนั้น
        if (currentMode === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleBtn.classList.add('dark');
            toggleSlider.innerHTML = '🌙';
        }
        
        // เมื่อคลิกที่ปุ่ม
        toggleBtn.addEventListener('click', () => {
            // สลับคลาส dark mode
            body.classList.toggle('light-mode');
            body.classList.toggle('dark-mode');
            toggleBtn.classList.toggle('dark');
            
            // เปลี่ยนไอคอน
            if (toggleBtn.classList.contains('dark')) {
                toggleSlider.innerHTML = '🌙';
                localStorage.setItem('mode', 'dark');
            } else {
                toggleSlider.innerHTML = '☀️';
                localStorage.setItem('mode', 'light');
            }
        });