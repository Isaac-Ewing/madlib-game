import { sync } from './domutils.js';

const firstNoun = document.getElementById('noun1');
const firstPlural = document.getElementById('plural-noun1');
const firstVerb = document.getElementById('verb1');
const secondVerb = document.getElementById('verb2');
const firstBodyPart = document.getElementById('part-of-body-plural1');
const secondPlural = document.getElementById('plural-noun2');
const firstAdjective = document.getElementById('adjective1');
const submit = document.getElementById('Go');
const hiddenParagraph = document.getElementById('hidden-paragraph');
const nounA = document.getElementById('nounA');
const pluralA = document.getElementById('plural-nounA');
const verbA = document.getElementById('verbA');
const verbB = document.getElementById('verbB');
const bodyPartA = document.getElementById('part-of-body-pluralA');
const pluralB = document.getElementById('plural-nounB');
const adjectiveA = document.getElementById('adjectiveA');
submit.addEventListener('click', () => {
    hiddenParagraph.style.display = 'block';
    nounA.textContent = sync(firstNoun);
    pluralA.textContent = sync(firstPlural);
    verbA.textContent = sync(firstVerb);
    verbB.textContent = sync(secondVerb);
    bodyPartA.textContent = sync(firstBodyPart);
    pluralB.textContent = sync(secondPlural);
    adjectiveA.textContent = sync(firstAdjective);
});