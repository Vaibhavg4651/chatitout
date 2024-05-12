import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './firebase';

const upload = async(file) => {
  // Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg/png/svg'
};


const storageRef = ref(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

return new Promise((resolve, reject) => {
  
  uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  }, 
  (error) => {
    switch (error.code) {
      case 'storage/unauthorized':
        break;
        case 'storage/canceled':
          break;
          
          // ...
          
          case 'storage/unknown':
            break;
          }
        }, 
        () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      resolve(downloadURL);
    });
  }
);
});
}

export default upload;