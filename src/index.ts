import Twit from "twit";
import config from "./config";
const bot = new Twit(config);

const map: { [x: number]: boolean } = {};
(function () {
  let a = 0;
  let b = 1;
  let aux;
  function fib() {
    aux = b;
    if (a === Infinity) {
      twetta(`É isso, o Javascript só me permite escrever números até: ` + aux);
      return process.exit();
    }
    twetta(a);
    b = a + b;
    a = aux;
    setTimeout(fib, 1800000);
  }
  fib();

  function twetta(status: number | string) {
    const pos = map[status as number];
    bot
      .post("statuses/update", { status: String(pos ? status + "_" : status) })
      .then(() => {
        map[status as number] = true;
      });
  }
})();