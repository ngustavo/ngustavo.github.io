/*
    Udemy Course Duration Calculator
    Unlicensed
    Usage: add this file as a browser bookmarklet or run it on console
*/

const ACCORDION_QUERY = '[id^="accordion-panel-title"]';
const ITEMS_QUERY = '[class*="curriculum-item-link--metadata"]';
const CHECKBOX_QUERY = '[data-purpose="progress-toggle-button"]';

let total = 0;
let totalTime = 0;
let watched = 0;
let watchedTime = 0;

const isSectionFinished = (txt) => {
    const chunks = txt.split('/');
    return chunks[0] / chunks[1] == 1;
};

const normalize = (hh, mm) => hh*60 + mm;

const fmtSpaces = (txt, n=5) => String(txt).padStart(n, ' ');

const fmtTime = (mm) => {
    const hours = String(Math.floor(mm/60)).padStart(2, 0);
    const minutes = String(mm%60).padStart(2, 0);
    return `${hours}h ${minutes}m`;
};

const getMinutes = (txt) => {
    let t = txt;
    let hours = 0;
    let minutes = 0;
    if (txt.includes('hr')) {
        const chunks = txt.split('hr');
        hours = parseInt(chunks[0]);
        t = chunks[1];
    }
    if (t.includes('min')) {
        minutes = parseInt(t.split('min')[0]);
    }
    return normalize(hours, minutes);
};

const toggleAccordions = (ignore) => {
    const accord = document.querySelectorAll(ACCORDION_QUERY);
    accord.forEach((e) => {
        if (ignore) return e.click();
        const expanded = e.getAttribute('aria-expanded');
        if (expanded !== 'true') {
            console.log(e.id, '[clicked]');
            e.click();
        }
    });
};

const printResults = () => {
    const lang = document.querySelector('html').getAttribute('lang');
    const must = total-watched;
    const mustTime = totalTime-watchedTime;
    const line = "■".repeat(58);
    const msg =
        ` This course has:    ${fmtSpaces(total)} classes | ${fmtTime(totalTime)}` +
        ` | ${fmtSpaces(totalTime)} min\n` +
        ` You have watched:   ${fmtSpaces(watched)} classes | ${fmtTime(watchedTime)}` +
        ` | ${fmtSpaces(watchedTime)} min\n` + 
        ` Still must watch:   ${fmtSpaces(must)} classes | ${fmtTime(mustTime)}` +
        ` | ${fmtSpaces(mustTime)} min`;
    
    console.log(`%c${line}\n${msg}\n${line}`, "color:#A435F0; font-weight:bold;");

    if (!lang.includes('en')) {
        console.log(
            "%c This script works better if language is set to English!",
            "color:red; font-weight:bold;"
        );
    }
};

const init = () => {
    const items = document.querySelectorAll(ITEMS_QUERY);
    const checks = document.querySelectorAll(CHECKBOX_QUERY);
    items.forEach((e, k) => {
        const chunks = e.textContent.replaceAll(' ', '');
        const mm = getMinutes(chunks);
        total += 1;
        totalTime += mm;
        if (checks[k].checked) {
            watched += 1;
            watchedTime += mm;
        }
        console.log(`${mm} min`);
    });
    printResults();
};

toggleAccordions();
init();
toggleAccordions(true);
