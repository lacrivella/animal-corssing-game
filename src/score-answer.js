function scoreAnswer(user, choice, quest) {
  user.bells += choice.bells;
  user.friendship += choice.friendship;
  user.completed[quest.id] = true;
  return user
}

export default scoreAnswer;