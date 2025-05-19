document.addEventListener('DOMContentLoaded', function () {
    load_navigation("#navigator")
});

//Hardcoded but it's gonna be replaced with a database call
const navigation_data = {
    "sections": [
        "home",
        "exp",
        "projects",
        "edu"
    ],

    "titles": {
        "home": {"pt": "Home", "en": "Home"},
        "exp": {"pt": "Experiência", "en": "Experience"},
        "projects": {"pt": "Projetos", "en": "Projects"},
        "edu": {"pt": "Educação", "en": "Education"}

    }
}

function load_navigation(navigator_id) {

    let navigator_html = "";
    const titles = navigation_data['titles'];
    const sections = navigation_data['sections'];

    sections.forEach(section_id => {
        
        let section_title = titles[section_id][lang];

        navigator_html += `<li id='li_${section_id}' onclick="goToSection('${section_id}')">
            ${section_title}
        </li>`
    })

    $(navigator_id).html(navigator_html)

    $("#page_navigator").html("<div class='dot'></div>".repeat(sections.length))
    $($(".dot").toArray()[0]).css({"opacity": "1"})

    $("#li_" + sections[0]).css({"font-weight": "bold"})

}

function goToSection(section) {

    let section_id = "#section_" + section;
    const sections = navigation_data['sections'];

    document.querySelector(section_id).scrollIntoView({
        behavior: "smooth"
    });

    $("#navigator li").css({"font-weight": "300"})
    $("#li_" + section).css({"font-weight": "bold"})

    $(".dot").css({"opacity": "0.5"});
    $($(".dot").toArray()[sections.indexOf(section)]).css({"opacity": "1"})
}
