const translations = {
    en: {
        quote: "A journey of a thousand miles begins with a single step.",
        "natal-title": "Natal Perdido",
        "natal-desc": "A Brazilian indie RPG with a biblical perspective.",
        "simulove-title": "SimuLove! +18",
        "simulove-desc": "A dating simulator with mature themes.",
        "vida-title": "Explore fragments of past lives",
        "vida-desc": "As an advanced AI.",
        "colors-title": "Colors of the Past",
        "colors-desc": "A drama about a pianist who stopped playing after a traumatic event.",
        footer: "© 2025 YEON Studio. All rights reserved."
    },
    pt: {
        quote: "Uma jornada de mil milhas começa com um único passo.",
        "natal-title": "Natal Perdido",
        "natal-desc": "Um RPG indie brasileiro com uma perspectiva bíblica.",
        "simulove-title": "SimuLove! +18",
        "simulove-desc": "Um simulador de namoro com temas maduros.",
        "vida-title": "Explore fragmentos de vidas passadas",
        "vida-desc": "Como uma IA avançada.",
        "colors-title": "Colors of the Past",
        "colors-desc": "Um drama sobre uma pianista que parou de tocar após um evento traumático.",
        footer: "© 2025 YEON Studio. Todos os direitos reservados."
    },
    kr: {
        quote: "천리 길도 한 걸음부터.",
        "natal-title": "잃어버린 크리스마스",
        "natal-desc": "성경적 관점을 가진 브라질 인디 RPG.",
        "simulove-title": "SimuLove! +18",
        "simulove-desc": "성숙한 테마의 데이트 시뮬레이터.",
        "vida-title": "과거 삶의 조각을 탐험하세요",
        "vida-desc": "고급 AI로서.",
        "colors-title": "과거의 색깔",
        "colors-desc": "트라우마 이후 연주를 멈춘 피아니스트에 대한 드라마.",
        footer: "© 2025 YEON Studio. 모든 권리 보유."
    }
};

function setLanguage(language) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });
}

document.querySelectorAll(".language-selector").forEach(button => {
    button.addEventListener("click", () => {
        const language = button.getAttribute("data-language");
        setLanguage(language);
    });
});