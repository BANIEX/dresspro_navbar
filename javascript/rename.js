const fs = require('fs');
  
var folder = './Dress_pro_images/';
  
fs.readdir(folder, (err, files) => {
  if (err) throw err;
  
  for (let i = 0; i < files.length; i++) {
      var filePath = folder+files[i];
      files[i] = `${i}.jpg`;
      var filePathRename = folder + 'RENAME-' + files[i];
  
      fs.rename(filePath, filePathRename, function(err) {
          if ( err ) console.log('ERROR: ' + err);
  
          console.log(filePathRename + ' :File Rename Successfully.');
      });
  }
});