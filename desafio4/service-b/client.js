async function GET(req) {
  const data = await fetch("http://api:8000/users");
  const text = await data.json();
  console.log(text);
}

GET();
