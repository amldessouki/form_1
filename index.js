document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //get user input
    const username = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const interst = document.getElementById("interest").value;

    //getting output
    const output = document.getElementById("output");
    output.innerHTML = `
    <h1>Welcome!${username}</h1> 
    <h1>your age is${age}and</h1>
    <h1> your intersting is${interst},It's nice<h1>
    `;
    // document.getElementById("userForm").reset();
  });
