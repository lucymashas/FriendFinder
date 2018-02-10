var friendTable = [
  {
    personFullName: "John Smith",
    personPhotourl: "https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_1280.png",
    personScores: ['5','1','2','3','1','2','1','5','2','3']
  },
  {
    personFullName: "Kyle Brown",
    personPhotourl: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png",
    personScores: ['4','1','2','3','2','2','1','3','2','3']
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendTable;