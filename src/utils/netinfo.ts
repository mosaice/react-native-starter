import { Platform, NetInfo, ConnectionInfo } from 'react-native';

export const getConnectionInfo = async (): Promise<ConnectionInfo> => {
  if (Platform.OS === 'ios') {
    return new Promise<ConnectionInfo>((resolve, reject) => {
      const connectionHandler = (connectionInfo: ConnectionInfo) => {
        NetInfo.removeEventListener('connectionChange', connectionHandler);

        resolve(connectionInfo);
      };

      NetInfo.addEventListener('connectionChange', connectionHandler);
    });
  }

  return NetInfo.getConnectionInfo();
};

export const isConnected = async (): Promise<boolean> => {
  if (Platform.OS === 'ios') {
    return new Promise<boolean>((resolve, reject) => {
      const connectionHandler = (connectionInfo: ConnectionInfo) => {
        NetInfo.removeEventListener('connectionChange', connectionHandler);
        const isOnline = ['wifi', 'cellular'].includes(connectionInfo.type);
        resolve(isOnline);
      };

      NetInfo.addEventListener('connectionChange', connectionHandler);
    });
  }

  return NetInfo.isConnected.fetch();
};
