// Hàm kiểm tra số hợp lệ
function isValidNumber(value) {
  return !isNaN(value); // isNaN sẽ trả về false nếu là số hợp lệ, kể cả dạng 2e-12
}

function calculate() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operation = document.querySelector('input[name="operation"]:checked');
  const resultField = document.getElementById("result");
  const message = document.getElementById("message");

  let result = null;

  // Kiểm tra người dùng có nhập số hợp lệ hay không
  if ((operation && !isValidNumber(number1)) || !isValidNumber(number2)) {
    message.innerHTML = "Vui lòng nhập số cần tính!";
    resultField.value = "";
    return;
  }
  if (
    !isValidNumber(document.getElementById("number1").value) ||
    !isValidNumber(document.getElementById("number2").value)
  ) {
    message.innerHTML = "Vui lòng nhập số hợp lệ!";
    resultField.value = "";
    return;
  }

  // Kiểm tra xem người dùng đã chọn phép toán chưa
  else if (operation) {
    switch (operation.value) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "mul":
        result = number1 * number2;
        break;
      case "divide":
        if (number2 !== 0) {
          result = number1 / number2;
        } else {
          message.innerHTML = "Không thể chia cho 0!";
          resultField.value = "";
          return;
        }
        break;
    }
    resultField.value = result.toFixed(2); // Hiển thị kết quả trong ô input
    message.innerHTML = "";
  } else {
    message.innerHTML = "Vui lòng chọn phép tính!";
  }
}
