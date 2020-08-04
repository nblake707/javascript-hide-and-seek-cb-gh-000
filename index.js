function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  const all = document.querySelectorAll('.ranked-list');

  const firstList = all[0];
  const secondList = all[1];

  let children1 = firstList.children
  let children2 = secondList.children


  let x = 0;

  for (let i=0; i < children1.length; i++) {
        x = parseInt(children1[i]);
        console.log(x)
        children1[i] = x + n;
  }

  // for (let i=0; i < children2.length; i++) {
  //       x = parseInt(children2[i]);
  //       children2[i] = x + n;
  // }
}
