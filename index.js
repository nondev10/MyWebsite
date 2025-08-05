// My Console
console.log("%c拾皓 ฅ՞•ﻌ•՞ฅ", "color:white;font-weight:bold;text-shadow:10px 5px 5px gray;font-size:6em;padding:10px 30px;".concat("background: linear-gradient(to right top,oklab(58.2% -0.04 -0.21),oklab(58.2% -0.376 -0.21));"));
console.log("个人博客 https://blog.shihao.us.kg/");

console.log('Press `help()` to get help.');
window.help = function() {
    console.log('`add(a,b)` to add');
    console.log('`minus(a,b)` to minus');
};

window.add = function(a,b) {
    return a+b;
}
window.minus = function(a,b) {
    return a-b;
}

// `h1` Tag Show
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('h1').forEach((h1, i) => {
        h1.style.opacity = 0;
        h1.style.transition = 'opacity 0.8s, transform 0.8s';
        setTimeout(() => {
            h1.style.opacity = 1;
            h1.style.transform = 'translateY(0)';
        }, i * 250);
    });
});

// Header Menu
const btn = document.getElementById('menu-btn');
const blocks = document.querySelectorAll('.menu-block');
const menuBlocks = document.getElementById('menu-blocks');
let open = false;
btn.addEventListener('click', () => {
    open = !open;
    btn.style.background = open ? '#b8b8b8' : 'transparent';
    btn.style.transition = 'background 0.3s';
    menuBlocks.style.pointerEvents = open ? 'auto' : 'none';

    // 判断是否为手机端
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    if (isMobile) {
        menuBlocks.style.transition = 'opacity 0.4s';
        menuBlocks.style.opacity = open ? '0.8' : '0';
    } else {
        menuBlocks.style.opacity = '';
        menuBlocks.style.transition = '';
    }

    blocks.forEach((block, i) => {
        setTimeout(() => {
            if (open) {
                block.style.opacity = 1;
                if (isMobile) {
                    block.style.transform = 'translateY(0)';
                } else {
                    block.style.transform = 'translateX(0)';
                }
            } else {
                block.style.opacity = 0;
                if (isMobile) {
                    block.style.transform = 'translateY(-30px)';
                } else {
                    block.style.transform = 'translateX(40px)';
                }
            }
        }, open ? i * 80 : (blocks.length - i - 1) * 80);
    });
});

// Copyright Update
const startYear = 2025;
const nowYear = new Date().getFullYear();
document.getElementById('copyright').textContent =
    nowYear > startYear
        ? `${startYear}-${nowYear} © Copyright ShiHao | Code By AI`
        : `${startYear} © Copyright ShiHao | Code By AI`;
