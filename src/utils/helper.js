import storage from '@react-native-firebase/storage';
import DeviceInfo from 'react-native-device-info';

export async function getImage(filePath) {
   try {
    const url = await storage().ref(filePath).getDownloadURL();
    return url
   } catch (error) {
    console.log("Error get file url: ", error.message);
   }
}

export function getDeviceId() {
   try {
      const uniqueId = DeviceInfo.getUniqueId();
      return uniqueId;
   } catch (error) {
      console.log("Error Device Id: ",error.message);
      throw error;
   }
}