function wait1(t) {
  return new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      let timeTaken = endTime - startTime;
      resolve(timeTaken);
      // resolve({result:`Wait1 resolved!, Wait1 took ${timeTaken}`, timeTaken});
    }, t);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      let timeTaken = endTime - startTime;
      resolve(timeTaken);
      // resolve({result:`Wait2 resolved!, Wait2 took ${timeTaken}`, timeTaken});
    }, t);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      let timeTaken = endTime - startTime;

      resolve(timeTaken);
      // resolve({result:`Wait1 resolved!, Wait1 took ${timeTaken}`, timeTaken});
    }, t);
  });
}

async function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  await Promise.all([wait1(t1 * 1000), wait2(t2 * 1000), wait3(t3 * 1000)]);
  const endTime = Date.now();
  const total = endTime - startTime;
  console.log(`Total time taken ${total}`);
  return total;
}

module.exports = { calculateTime, wait1, wait2, wait3 };
