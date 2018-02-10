var friendTable = [
  {
    personFullName: "John Smith",
    personPhotourl: "http://www.flickr.com/johndoe",
    personScores: ['5','1','2','3','1','2','1','5','2','3']
  },
  {
    personFullName: "Kyle Brown",
    personPhotourl: "https://pixabay.com/en/man-person-avatar-face-head-156584/",
    personScores: ['4','1','2','3','2','2','1','3','2','3']
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendTable;