import api from '../services/api.js';
import createChoice from '../quest/create-choice.js';
import loadProfile from '../load-profile.js';
import findById from '../find-by-id.js';
import scoreAnswer from '../score-answer.js';

loadProfile();

// reference all needed DOM nodes
const title = document.getElementById('title');
const description = document.getElementById('description');
const result = document.getElementById('result');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const resultDescription = document.getElementById('result-description');
const user = api.getUser();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);
title.textContent = quest.title;
description.textContent = quest.description;


for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const questions = createChoice(choice);
    console.log(questions, 'questions')
    choiceForm.appendChild(questions);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('radioButton')
    const choice = findById(quest.choices, choiceId);
    
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    api.signUp(scoreAnswer(user, choice, quest));
    loadProfile();
});