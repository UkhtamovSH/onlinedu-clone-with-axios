import React from "react"
import _ from "lodash"

const LodashArray = () => {
  /* ===================Lodash===================== */
  // const listArr = ['a', 'c', false, 0, 'k', '', NaN]
  // const listArr2 = [
  //   {
  //     'char1': 'A',
  //     'char2': 'c',
  //   },
  //   {
  //     'char3': 'd',
  //     'char4': 'g',
  //   },
  // ]
  // const listArr3 = [2, 5, 3, [77, '56', [6, [false, [null]]]], 34]

  // const listArr4 = [['f', 57], ['9', 'dd'], ['a', 1], [55, '45']]

  /* ----“Array” Methods-----*/
  /*
  //1 _.chunk() - method
  const chunkList = _.chunk(listArr, 2)
  */

  /*
  //2 _.compact() - method
  const compactList = _.compact(listArr)
  */

  /*
  //3 _.concat() - method
  const concatList = _.concat(listArr, 15, 32)
  */

  /*
  //4 _.drop() - method
  const dropList = _.drop(listArr)
  */

  /*
  //5 _.dropRight() - method
  const dropRightList = _.dropRight(listArr)
  */

  /*
  //6 _.fill() - method
  const fillList = _.fill(listArr, 1, 2, 3)
  */

  /*
  //7 _.findIndex() - method
  const findIndexList = _.findIndex(listArr2, { 'char4': 'g' })
  */

  /*
  //8 _.findLastIndex() - method
  const findLastIndexList = _.findLastIndex(listArr2, { 'char4': 'g' })
  */

  /*
  //9 _.flatten() - method
  const flattenList = _.flatten(listArr3)
  */

  /*
  //10 _.flattenDeep() - method
  const flattenDeepList = _.flattenDeep(listArr3)
  */

  /*
  //11 _.flattenDepth() - method
  const flattenDepthList = _.flattenDepth(listArr3, 1)
  */

  /*
  //12 _.flattenDepth() - method
  const flattenDepthList = _.flattenDepth(listArr3, 1)
  */

  /*
  //13. _.fromPairs() - method
  const fromPairsList = _.fromPairs(listArr4)
  */

  /*
  //14. _.head() - method
  const headList = _.head(listArr4)
  */

  /*
  //15. _.indexOf() - method
  const indexOfList = _.indexOf(['a', 'c', 'f', 'j'], 'a')
  */

  /*
  // 16. _.initial() - method
  const initialList = _.initial([2, 3, 4, 5])
  */

  /*
  // 17. _.intersection() - method
  const intersectionList = _.intersection([2, 3], [4, 2, 5, 3])
  */

  /*
  // 18. _.intersection() - method
  const intersectionList = _.intersection([2, 3], [4, 2, 5, 3])
  */

  /*
  // 18. _.intersectionBy() - method
  const intersectionByList = _.intersectionBy([2.2, 3], [4, 2.4, 5, 3], Math.floor)
  */

  /*
  // 18. _.intersectionWith() - method
  const intersectionWithList = _.intersectionWith(
    [{ 'x': 2, 'y': 3 }, { 'x': 5, 'y': 6 }],
    [{ 'x': 5, 'y': 6 }, { 'x': 4, 'y': 9 }], _.isEqual
  )
  */

  /*
  // 19. _.join() - method
  const joinList = _.join([1, 2, 3], '-')
  */

  /*
  // 20. _.last() - method
  const lastList = _.last([1, 2, 3])
  */

  /*
  // 21. _.lastIndexOf() - method
  const lastIndexOfList = _.lastIndexOf([1, 2, 4, 6, 3], 7)
  */

  /*
  // 22. _.nth() - method
  const nthList = _.nth([1, 2, 4, 6, 3], 3)
  */

  /*
  // 23. _.pull() - method
  const pullList = _.pull([1, 2, 4, 33, 6, 3], 3)
  */

  /*
  // 24. _.pullAll() - method
  const pullAllList = _.pullAll([1, 2, 4, 33, 6, 3], 3)
  */

  /*
  // 25. _.pullAllBy() - method
  const pullAllByList = _.pullAllBy(
    [{ 'x': 2 }, { 'x': 6 }], [{ 'x': 6 }], 'x')
  */

  /*
  // 26. _.pullAllWith() - method

  */
  const pullAllWithList = _.pullAllWith(
    [{ 'x': 2 }, { 'x': 6 }], [{ 'x': 2 }], _.isEqual)
  /*
  
  */


  /*
  *** TUSHUNOMADIM ***
  // _.difference() - method
  // _.differenceBy() - method
  // _.differenceWith() - method
  // _.dropRightWhile() - method
  // _.dropWhile() - method
  */


  return (
    <div>
      {console.log(pullAllWithList)}
    </div>
  )
}

export default LodashArray
