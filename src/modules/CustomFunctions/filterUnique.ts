const filterUnique = (arr: any[], string: string) => {
  var resArr: any[] = [];

  arr.filter((item) => {
    let i = resArr.findIndex((x) => x[string] == item[string]);
    if (i <= -1) resArr.push(item);
    return;
  });

  return resArr;
};

export default filterUnique;
