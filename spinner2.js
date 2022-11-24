let x = function (value) {
  time = 100;
  for (v of value)
  timev = time + 300
    setTimeout(() => {
      process.stdout.write(v);
      }, timev);
      console.log(v)
};

const result = x('(\r|   ', '(\r/   ','(\r-   ', '\r\\   ', '\r/   ','\r-   ');
