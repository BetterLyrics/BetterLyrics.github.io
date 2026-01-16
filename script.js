document.addEventListener('DOMContentLoaded', () => {
    console.log('BetterLyrics Landing Page Loaded');

    // --- 交互特效：光晕稍微跟随鼠标移动 ---
    const glow = document.getElementById('glow-effect');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // 计算偏移量：让光晕根据鼠标位置反向或正向微调
        // 这里设置为正向微调，范围是 -20px 到 20px
        const moveX = (x - 0.5) * 40; 
        const moveY = (y - 0.5) * 40;

        // 应用变换，保留原来的 translate(-50%) 居中
        glow.style.transform = `translateX(calc(-50% + ${moveX}px)) translateY(${moveY}px)`;
    });
});