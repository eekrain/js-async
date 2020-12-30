// // sync code example

// function otherFn() {
//   console.log("in otherFn");
//   console.log("do some stuff");
// }

// console.log("start");
// otherFn();
// console.log("end");

// ======================================================================

// async code example

// console.log("start");

// // this will be skipped
// setTimeout(() => {
//   console.log("in the settimeoit");
// }, 3000);

// // event listener is async too
// // callback doesnt always async
// const x = [1, 2, 3, 4, 5];

// x.forEach((y) => {
//   console.log(y);
// });

// console.log("end");

// ======================================================================

// call back example
function loginUser(email, pass, cb) {
  setTimeout(() => {
    console.log("now we have the data");
    cb({ email: email });
  }, 2000);
}

function getUserVid(email, cb) {
  setTimeout(() => {
    cb(["vid1", "vid2", "vid3"]);
  }, 1000);
}

function getVidDetail(vid, cb) {
  setTimeout(() => {
    cb(`video title : ${vid}`);
  }, 1000);
}

console.log("start");

const user = loginUser("eka@eka.com", "12345s", (user) => {
  console.log(user);
  getUserVid(user.email, (vids) => {
    console.log(vids);
    getVidDetail(vids[0], (title) => {
      console.log(title);
    });
  });
});

console.log("end");
