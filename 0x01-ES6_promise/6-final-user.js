import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const responseArray = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        responseArray.push({ status: element.status, value: element.value });
      } else {
        responseArray.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return responseArray;
  });
}
