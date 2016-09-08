var curIndex = 0;
  var timeInterval = 4000;
  var arr = new Array();
  arr[0] = "images/meituan.header.one.jpg";
  arr[1] = "images/meituan.header.two.jpg";
  setInterval(changeImg,timeInterval);
  function changeImg() {
   var obj = document.getElementById("obj");
   if (curIndex == arr.length-1) {
    curIndex = 0;
   } else {
    curIndex += 1;
     }
   obj.src = arr[curIndex];
  }