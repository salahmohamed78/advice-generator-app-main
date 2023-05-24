async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      //test
      console.log(data);
      return data;
    } else {
      throw new Error("Internal fetch error");
    }
  } catch (err) {
    console.log(err);
  }
}

async function getAdvice() {
  const adviceObject = await fetchData("https://api.adviceslip.com/advice");
  console.log(adviceObject.slip.advice);
  return adviceObject.slip;
}

function render(elementSelector, data, options = { append: false }) {
  const ele = document.querySelector(elementSelector);
  if (options.append === false) {
    ele.replaceChildren();
  }
  ele.append(data);
}

export { fetchData, getAdvice, render };
