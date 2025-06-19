fetch('/info')
  .then(response => response.json())
  .then(data => {
    console.log("Visitor Info:", data);
  });