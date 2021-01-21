import {apiInstance} from '../httpClient';

export const getDataUsingSimpleGetCall = async () => {
  const data = apiInstance.get('/albums');
  return data;
};

export const simplePostCall = async () => {
  const data = apiInstance
    .post('/albums', {
      userID: 10,
      id: 12,
      title: 'hello kevin',
    })
    .then(function (response) {
      alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
      alert(error.message);
    });
  return data;
};

// export const login = async (email, password) => {
//   const {data} =  apiInstance.post('/login', {
//           email: email,
//           password: password
//       });
//     return data;
//   };

//   export const verifyOTP = async (otp) => {
//     const {data} =  apiInstance.post('/verify-otp', {
//             otp: otp
//         });
//       return data;
//     };

//     export const getCountries = async () => {
//       const {data} =  apiInstance.get('/countries');
//         return data;
//       };
