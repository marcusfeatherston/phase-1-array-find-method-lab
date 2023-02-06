const superbowlWin = (listOfRecords) => {
  const foundRecord = listOfRecords.find((record) => {
    // console.log(record);
    return record.result === "W";
  });
  console.log(foundRecord);
  return foundRecord ? foundRecord.year : undefined;
};
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const superbowlWin = (listOfRecords) => {
//   const foundRecord = listOfRecords.find(({ result }) => {
//     return result === "W";
//   });
//   return foundRecord ? foundRecord.year : foundRecord;
// };
