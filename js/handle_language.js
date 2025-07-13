const INFORMATION = {
    "home": {
        "title": {
            "pt": "Olá, eu sou <span class='text-yellow'>Henrique Ailer</span>",
            "en": "Hello, I am <span class='text-yellow'>Henrique Ailer</span>"
        },
        "description": {
            "pt": "Desenvolvedor de software",
            "en": "Software developer"
        },
        "find_me": {
            "pt": "Você pode me encontrar aqui!",
            "en": "You can find me here!"
        }
    },
    
    "exp": {
        "title": {
            "pt": "Experiência",
            "en": "Experience"
        }
    },

    "projects": {
        "title": {
            "pt": "Projetos",
            "en": "Projects"
        }
    },
    
    "edu": {
        "title": {
            "pt": "Educação",
            "en": "Education"
        }
    }

}

let lang = "en"

document.addEventListener('DOMContentLoaded', function () {
    $("#lang_btn span").css({ "font-weight": "300" })
    $(`#lang_${lang}`).css({ "font-weight": "bold" })
    change_text(lang)
});

function change_text(language) {

    if (!["pt", "en"].includes(language)) {
        language = "en"
    }

    Array.from(Object.keys(INFORMATION)).forEach(page_id => {

        let page = INFORMATION[page_id]
        console.log(page_id)
        console.log(page)

        Array.from(Object.keys(page)).forEach(section => {
            $(`#${page_id}_${section}`).html(page[section][language])
        })
    })

}

function toggle_language() {
    if (lang == "pt") {
        lang = "en"
        $(".see-more p").text("See all")
    } else {
        lang = "pt"
        $(".see-more p").text("Ver tudo")
    }

    $("#lang_btn span").css({ "font-weight": "300" })
    $(`#lang_${lang}`).css({ "font-weight": "bold" })
    change_text(lang)
    load_navigation("#navigator")
}