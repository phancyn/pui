//Glow effects for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('glow');
    } else {
        navbar.classList.remove('glow');
    }
});

function copyCode(code) {
    let cssCode = '';
    
    if (code === 'css-ru') {
        cssCode = '<link rel="stylesheet" href="https://phancyn.ru/css/pUI/css.css">';
    }
    if (code === 'css') {
        cssCode = '<link rel="stylesheet" href="https://github.com/phancyn/pui/releases/download/v1.0.0/css.css">';
    }

    navigator.clipboard.writeText(cssCode);
    alert('Код скопирован в буфер обмена!');
}
