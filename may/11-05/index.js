// Promise
const userStatus = new Promise((resolve, reject) => {
  let hasKids = false;
  let hasDog = true;
  if (hasDog) {
    resolve({
      status: "User is cool",
      emoji: "😎",
    });
  } else if (hasKids) {
    resolve({
      status: "User is going crazy",
      emoji: "😅",
    });
  } else {
    reject({
      status: "User is alone",
      emoji: "🥺",
    });
  }
});
userStatus
  .then((obj) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${obj.status} and he/she is ${obj.emoji}`;
  })
  .catch((err) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${err.status} and he/she is ${err.emoji}`;
  });

function stepOne(userName) {
  return new Promise((resolve, reject) => {
    console.log("User data being loaded");
    if (userName == "Zain") {
      resolve("Welcome back 😊");
    } else {
      reject("Sorry IDK you");
    }
  });
}

function secondStep(response) {
  return new Promise((resolve) => {
    console.log("Still loading");
    resolve(`We have been waiting for you ${response}`);
  });
}
// stepOne("Zain")
//   .then((response) => {
//     console.log("response just arrive");
//     return secondStep(response);
//   })
//   .then((secondResponse) => {
//     console.log(secondResponse);
//   })
//   .catch((err) => console.log(err));

// Async Await
async function startSomething() {
  try {
    const response = await stepOne("Nancy");
    console.log("response just arrive");
    const secondResponse = await secondStep(response);
    console.log(secondResponse);
  } catch (err) {
    console.log(err);
  }
}

startSomething();
