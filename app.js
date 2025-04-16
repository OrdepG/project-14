document.getElementById("btn").addEventListener("click",() =>{
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let operator = document.getElementById("selectOp").value;

  result.classList.remove("success","error");

  if(num1 === "" || num2 === "") {
    result.innerHTML = "⚠️ Submit the numbers!";
    result.classList.add("error");
    return;
  }

  num1 = +num1;
  num2 = +num2;

switch (operator) {
  case "plus":
    result.innerHTML = `✅ Result: ${num1 + num2}`;
    result.classList.add("success");
    break;
    case "min":
      result.innerHTML = `✅ Result: ${num1 - num2}`;
    result.classList.add("success");
      break;
      case "dev":
        if (num2  === 0){
          result.innerHTML = "❌ I'ts not possible to divide by zero"
    result.classList.add("error");
        } else{
        result.innerHTML = `✅ Result: ${num1 / num2}`;
    result.classList.add("success");
        }
        break;
        case "multi":
          result.innerHTML = `✅ Result: ${num1 * num2}`;
    result.classList.add("success");
    break;
    default:
      result.innerHTML = "❓ You cannot calculate that";
      result.classList.add("error")
}
});

document.querySelector(".num1").addEventListener("input", limparResultado);
document.querySelector(".num2").addEventListener("input", limparResultado);
document.getElementById("selectOp").addEventListener("change", limparResultado);

function limparResultado() {
  let result = document.querySelector(".result");
  result.innerHTML = " ";
  result.classList.remove("success", "error");
}