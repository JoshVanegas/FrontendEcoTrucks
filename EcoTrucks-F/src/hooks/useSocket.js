// useSocket.js
// Hook para manejar la conexión y eventos de socket.io

import { useEffect } from "react";
import SocketService from "../services/SocketService";

const useSocket = (token, events = {}) => {
  useEffect(() => {
    if (token) {
      SocketService.connect(token);
      Object.entries(events).forEach(([event, handler]) => {
        SocketService.on(event, handler);
      });
    }
    return () => {
      SocketService.disconnect();
    };
  }, [token, events]);
};

export default useSocket;
