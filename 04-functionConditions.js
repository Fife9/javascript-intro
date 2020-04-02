var bed = 1;

function goldilocks(bed){
  if (bed == 1) {
    return "Too hard"
  } else if (bed == 2) {
    return "Too soft"
  } else if (bed == 3) {
    return "Just Right!"
  } else {
    return "There are no more Beds"
  }
}

goldilocks();
