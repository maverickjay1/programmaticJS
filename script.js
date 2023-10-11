const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(0).max(130).required(),
  });

  const { error } = schema.validate({ name, email, age });

  if (error) {
    alert(error.details[0].message);
  } else {
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Age: " + age);
  }
});
