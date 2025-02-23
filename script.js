const translations = {
    'pt-br': {
        'phrase': '“Uma jornada de mil milhas começa com um único passo.”',
        'footer': '&copy; 2025 YEON Studio. Todos os direitos reservados.',
        'natal-title': 'Natal Perdido',
        'natal-desc': 'Um RPG indie brasileiro com perspectiva bíblica.',
        'simulove-title': 'SimuLove! <span data-lang="simulove-18">+18</span>',
        'simulove-desc': 'Um simulador de namoro com temas maduros.',
        'vida-title': 'Vida',
        'vida-desc': 'Explore fragmentos de vidas passadas como uma IA avançada.',
        'colors-title': 'Colors of the Past',
        'colors-desc': 'Explore diferentes áreas de sua infância após um evento terrível.'
    },
    'en': {
        'phrase': '“A journey of a thousand miles begins with a single step.”',
        'footer': '&copy; 2025 YEON Studio. All rights reserved.',
        'natal-title': 'Lost Christmas',
        'natal-desc': 'A Brazilian indie RPG with a biblical perspective.',
        'simulove-title': 'SimuLove! <span data-lang="simulove-18">+18</span>',
        'simulove-desc': 'A dating simulator with mature themes.',
        'vida-title': 'Life',
        'vida-desc': 'Explore fragments of past lives as an advanced AI.',
        'colors-title': 'Colors of the Past',
        'colors-desc': 'Explore different areas of your childhood after a terrible event.'
    },
    'ko': {
        'phrase': '“천리 길도 한 걸음부터 시작된다.”',
        'footer': '&copy; 2025 YEON Studio. 모든 권리 보유.',
        'natal-title': '잃어버린 크리스마스',
        'natal-desc': '성경적 관점을 가진 브라질 인디 RPG.',
        'simulove-title': 'SimuLove! <span data-lang="simulove-18">+18</span>',
        'simulove-desc': '성숙한 주제를 가진 데이트 시뮬레이터.',
        'vida-title': '삶',
        'vida-desc': '고급 AI로서 과거 삶의 조각을 탐험하세요.',
        'colors-title': '과거의 색깔',
        'colors-desc': '끔찍한 사건 후 어린 시절의 다양한 지역을 탐험하세요.'
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        el.innerHTML = translations[lang][key];
    });

    const flags = document.querySelectorAll('.language-selector span');
    flags.forEach(flag => flag.classList.remove('selected'));
    document.querySelector(`.language-selector span[onclick="changeLanguage('${lang}')"]`).classList.add('selected');
}

function toggleInfo(id) {
    const info = document.getElementById(id);
    const allInfos = document.querySelectorAll('.game-info');
    allInfos.forEach(info => info.style.display = 'none');
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
    }
}
