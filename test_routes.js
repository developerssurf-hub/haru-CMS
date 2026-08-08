const fs = require('fs');

async function getRoutes() {
  const res = await fetch('http://localhost:1337/api/examenes', { method: 'OPTIONS' });
  console.log(res.status);
  const allow = res.headers.get('allow');
  console.log('Allow:', allow);
}

getRoutes();
