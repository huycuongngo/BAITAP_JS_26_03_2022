



var numbers = [];
// let numbers = []
// Why scope is not limited?

document.getElementById("btn-push").addEventListener("click", () => {
  var num = document.getElementById("txtNum").value * 1;
  numbers.push(num);
  console.log("numbers", numbers);

  document.getElementById("myArr").innerText = `[${numbers}]`;
  document.getElementById("txtNum").value = '';
  document.getElementById("txtNum").focus();
});

document.getElementById("tong-cac-so-duong").addEventListener("click", () => {
  document.getElementById("result1").innerText = tinhTongCacSoDuong(numbers);
});
document.getElementById("so-luong-so-duong").addEventListener("click", () => {
  document.getElementById("result2").innerText = demSoDuong(numbers);
});
document.getElementById("gtnn").addEventListener("click", () => {
  document.getElementById("result3").innerText = timSoNhoNhat(numbers);
});
document.getElementById("so-duong-nho-nhat").addEventListener("click", () => {
  document.getElementById("result4").innerText = soDuongNhoNhat(numbers);
});
document.getElementById("so-chan-cuoi-cung").addEventListener("click", () => {
  document.getElementById("result5").innerText = soChanCuoiCung(numbers);
});
document.getElementById("doi-vi-tri").addEventListener("click", () => {
  var firstIndex = document.getElementById("index1").value * 1;
  var secondIndex = document.getElementById("index2").value * 1;
  console.log(firstIndex, secondIndex);
  document.getElementById("result6").innerText = doiGiaTri(numbers, firstIndex, secondIndex);
});
document.getElementById("mang-tang-dan").addEventListener("click", () => {
  document.getElementById("result7").innerText = mangTangDan(numbers);
});
document.getElementById("so-nguyen-to-dau-tien").addEventListener("click", () => {
  document.getElementById("result8").innerText = timSoNguyenToDauTien(numbers);
})
document.getElementById("so-luong-so-nguyen").addEventListener("click", () => {
  document.getElementById("result9").innerText = soLuongSoNguyen(numbers);
});
document.getElementById("so-sanh-am-duong").addEventListener("click", () => {
  document.getElementById("result10").innerText = soSanhSoLuongAmDuong(numbers);
});


// bai 1 tinh tong cac so duong trong mang
const tinhTongCacSoDuong = myArr => {
  var sum = 0;
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > 0) {
      sum += myArr[i];
    }
  }
  return sum;
}

// bai 2 dem co bao nhieu so duong trong mang
const demSoDuong = function (myArr) {
  var count = 0;
  var i = 0;
  while (i < myArr.length) {
    if (myArr[i] > 0)
      count++;
    i++;
  }
  return count;
}

// bai 3 tim so nho nhat trong mang
const timSoNhoNhat = function (myArr) {
  var minNumber = myArr[0];
  for (let i = 1; i < myArr.length; i++) {
    if (myArr[i] <= minNumber) {
      minNumber = myArr[i];
    }
  }
  return minNumber;
}

// bai 4 tim so duong nho nhat trong mang
// loc mang su dung filter()
const soDuongNhoNhat = function (myArr) {
  var newArr = myArr.filter(item => {
    return item > 0;
  });
  var minPositiveNumber = newArr[0];
  for (let i = 0; i < newArr.length; ++i) {
    if (newArr[i] <= minPositiveNumber)
      minPositiveNumber = newArr[i];
  }
  return minPositiveNumber;
}


// bai 5 tim so chan cuoi cung trong mang
// neu mang khong co so chan thi return -1
const soChanCuoiCung = (myArr) => {
  for (let i = myArr.length - 1; i >= 0; i--) {
    if (myArr[i] % 2 == 0)
      return myArr[i];
  }
  return -1;
}

// bai 6 doi cho 2 gia tri trong mang theo vi tri
const doiGiaTri = (myArr, x, y) => {
  var intermediary = myArr[x];
  myArr[x] = myArr[y];
  myArr[y] = intermediary;
  return myArr;
}

// bai 7 sap xep mang tang dan
const mangTangDan = (myArr) => {

  myArr.sort(function (a, b) { return a - b });
  return myArr;
}

// bai 8 tim so nguyen to dau tien trong mang
// neu khong co tra ve -1
const timSoNguyenToDauTien = (myArr) => {
  for (let i = 0; i < myArr.length; i++) {
    if (kiemTraSoNguyeTo(myArr[i]))
      return myArr[i];
  }
  return -1;
}

const kiemTraSoNguyeTo = (n) => {
  if (n < 2) {
    return false;
  }
  let i = 2;
  while (i < n) {
    if (n % i == 0)
      return false
    i++;
  }
  return true;
}


// bai 9 nhap mang so thuc
// tim xem co bao nhieu so nguyen trong mang
const soLuongSoNguyen = (myArr) => {
  var count = 0;
  myArr.forEach(ele => {
    if (kiemTraSoNguyen(ele))
      count++;
  });
  return count;
}

const kiemTraSoNguyen = (n) => {
  if (n % 1 == 0 || n % 1 == -0)
    return true;
  else
    return false;
}


// bai 10 so sanh so luong so am va so luong so duong
const soSanhSoLuongAmDuong = (myArr) => {
  var countPositive = 0;
  var countNegative = 0;
  myArr.forEach(ele => {
    if (ele > 0)
      countPositive++;
    if (ele < 0)
      countNegative++;
  });
  if (countPositive > countNegative)
    return "So luong so duong lon hon so luong so am";
  else if (countPositive == countNegative && countPositive != 0)
    return "So luong so duong bang so luong so am";
  else if (countPositive == countNegative && countPositive == 0)
    return "Mang khong chua so am, so duong";
  else
    return "So luong so duong nho hon so luong so am";
}





