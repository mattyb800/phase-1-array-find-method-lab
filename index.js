// code your so



function superbowlWin(array) {
    let answer = array.find((element) => (element.result === "W"))
  if (answer) {
   return answer.year;
}

}