const superbowlWin = (listOfRecords) => {
  const foundRecord = listOfRecords.find((record) => {
    return record.result === "W";
  });
  return foundRecord ? foundRecord.year : foundRecord;
};
