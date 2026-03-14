// 1. تعريف المتغيرات الأساسية
let count = 0;
const counterElement = document.getElementById('counter');
const modal = document.getElementById('customModal');

/**
 * 2. دالة التسبيح (الزيادة)
 * كتحكم في زيادة الرقم، الاهتزاز، والحركة البصرية
 */
function increment() {
    count++;
    counterElement.innerText = count;

    // إضافة حركة تكبير خفيفة للرقم فاش يتزاد (Animation)
    counterElement.style.transform = "scale(1.2)";
    setTimeout(() => {
        counterElement.style.transform = "scale(1)";
    }, 100);

    // اهتزاز الهاتف (Vibration) فاش تضغط (خدّامة في أندرويد)
    if (navigator.vibrate) {
        navigator.vibrate(50); 
    }
}

/**
 * 3. دالة إظهار نافذة التنبيه (Open Modal)
 */
function resetCounter() {
    if (modal) {
        modal.style.display = "block";
    }
}

/**
 * 4. دالة إغلاق النافذة بدون تصفير (Close Modal)
 */
function closeModal() {
    if (modal) {
        modal.style.display = "none";
    }
}

/**
 * 5. دالة التأكيد (Confirm Reset)
 * كتصفر العداد بصح وتسد النافذة
 */
function confirmReset() {
    count = 0;
    counterElement.innerText = count;
    closeModal();
    
    // اهتزاز خفيف للتأكيد
    if (navigator.vibrate) {
        navigator.vibrate([30, 30, 30]); 
    }
}

/**
 * 6. ميزة إضافية: سد النافذة إلى بركتي في أي بلاصة خاوية (خارج المربع)
 */
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
