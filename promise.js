// // promise example 1
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("got the user");
//     // resolve({ user: "eka" });
//     reject("user not logged in");
//   }, 2000);
// });

// console.log("start");

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("end");

// =======================================================================
// promise example 2

function loginUser(email, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data");
      resolve({ email: email });
    }, 2000);
  });
}

function getUserVid(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(["vid1", "vid2", "vid3"]);
      reject("error connecting");
    }, 1000);
  });
}

function getVidDetail(vid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`video title : ${vid}`);
    }, 1000);
  });
}

// using then and catch style
// loginUser("eka", "pass")
//   .then((user) => getUserVid(user.email))
//   .then((vids) => getVidDetail(vids[0]))
//   .then((detail) => console.log(detail));

// async await style
async function displayUser() {
  try {
    const loggedUser = await loginUser("eka", "pass");
    const videos = await getUserVid(loggedUser.email);
    const detail = await getVidDetail(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log(err);
  }
}
displayUser();

// =========================================================
// promise example 3, do many async at once

// const yt = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("fetching yt");
//     resolve({ vids: [1, 2, 3, 4, 5] });
//   }, 4000);
// });

// const fb = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("fetching fb");
//     resolve({ user: "eka" });
//   }, 2000);
// });

// Promise.all([yt, fb]).then((result) => console.log(result));
