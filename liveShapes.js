window.onload = function () {
  const wrapper = document.getElementById("container");

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  };

  const combinations = [
    { configuration: 1},
   
    { configuration: 2},
  
    { configuration: 3},
  ];

  let prev = 0;

  setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prev),
      combination = combinations[index];

    wrapper.dataset.configuration = combination.configuration;
 

    prev = index;
  }, 2000);


};
