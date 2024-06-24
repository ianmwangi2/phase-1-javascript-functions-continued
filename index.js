// saturday-fun
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }

  // monday-work
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }

  //wrap-adjective
  function wrapAdjective(accumulative) {
    return function(adjective) {
        return `You are ${accumulative}${adjective}${accumulative}!`;
    };
  }
