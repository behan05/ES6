// error handing is one of the important concept in any programming language that are help to prevent the code from unaspected Error.

// fetching data using XMLHttpRequest with promise.

function makeAPIRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    try {
      xhr.open("GET", url, true);
      xhr.onreadystatechange = (e) => {
        // if request completed.
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            const reveivedData = xhr.responseText;
            const returnVal = JSON.parse(reveivedData);
            resolve(returnVal);
          } else {
            reject(new Error("there are network issue"));
          }
        }
      };
      xhr.send();
    } catch (error) {
      reject("check you network, network should be connected!", error);
    }
  });
}
makeAPIRequest("https://api.github.com/users/behan")
  .then((res) => {
    console.log(res.login);
  })
  .catch((e) => {
    console.log(error);
  });
