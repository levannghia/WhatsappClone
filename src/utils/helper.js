import storage from '@react-native-firebase/storage';

export async function getImage(filePath) {
   try {
    const url = await storage().ref(filePath).getDownloadURL();
    return url
   } catch (error) {
    console.log(error.message);
   }
}