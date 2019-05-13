import api from '../services/api.js';
import createChoice from '../quest/create-choice.js';
import loadProfile from '../load-profile.js';
import findById from '../find-by-id.js';

loadProfile();

// reference all needed DOM nodes
const title = document.getElementById('title');
const description = document.getElementById('description');
const result = document.getElementById('result');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const resultDescription = document.getElementById('result-description');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

title.textContent = quest.title;
description.textContent = quest.description;
choiceForm.classList.add('hidden');
result.classList.remove('hidden');
resultDescription.textContent = choices.result;

for(let i = 0; i < quest.choices; i++) {
    const choice = quest.choices[i];
    const questions = createChoice(choice);
    choiceForm.appendChild(questions);
}