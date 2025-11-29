async function GET(req) {
  const data = await fetch("http://server:8080");
  const text = await data.text();
  console.log(text);
}

setInterval(GET, 5000);
