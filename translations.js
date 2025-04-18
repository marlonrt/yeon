const translations = {
    en: {
        quote: "A journey of a thousand miles begins with a single step.",
        "xandaum-title": "Xandaum",
        "xandaum-desc": "Do you have what it takes to rule with the pen of justice?",
        "natal-title": "Natal Perdido",
        "natal-desc": "A Brazilian indie RPG with a biblical perspective.",
        "simulove-title": "SimuLove! +18",
        "simulove-desc": "A dating simulator with mature themes.",
        "vida-title": "Explore fragments of past lives",
        "vida-desc": "As an advanced AI.",
        "colors-title": "Colors of the Past",
        "colors-desc": "A drama about a pianist who stopped playing after a traumatic event.",
        "trailer": "Trailer",
        footer: "© 2025 YEON Studio. All rights reserved."
    },
    pt: {
        quote: "Uma jornada de mil milhas começa com um único passo.",
        "xandaum-title": "Xandaum",
        "xandaum-desc": "Você tem o que é preciso para governar com a caneta da justiça?",
        "natal-title": "Natal Perdido",
        "natal-desc": "Um RPG indie brasileiro com uma perspectiva bíblica.",
        "simulove-title": "SimuLove! +18",
        "simulove-desc": "Um simulador de namoro com temas maduros.",
        "vida-title": "Explore fragmentos de vidas passadas",
        "vida-desc": "Como uma IA avançada.",
        "colors-title": "Colors of the Past",
        "colors-desc": "Um drama sobre uma pianista que parou de tocar após um evento traumático.",
        "trailer": "Trailer",
        footer: "© 2025 YEON Studio. Todos os direitos reservados."
    },
    kr: {
        quote: "천리 길도 한 걸음부터.",
        "xandaum-title": "샨다움",
        "xandaum-desc": "정의의 펜으로 통치할 준비가 되셨나요?",
        "natal-title": "잃어버린 크리스마스",
        "natal-desc": "성경적 관점을 가진 브라질 인디 RPG.",
        "simulove-title": "SimuLove! +18",
        "simulove-desc": "성숙한 테마의 데이트 시뮬레이터.",
        "vida-title": "과거 삶의 조각을 탐험하세요",
        "vida-desc": "고급 AI로서.",
        "colors-title": "과거의 색깔",
        "colors-desc": "트라우마 이후 연주를 멈춘 피아니스트에 대한 드라마.",
        "trailer": "트레일러",
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

// Definir o idioma padrão
document.addEventListener("DOMContentLoaded", function() {
    setLanguage("en");
});