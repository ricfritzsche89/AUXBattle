import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import os from 'os'

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Bevorzuge 192.168.* oder 10.* Adressen (Standard Heimnetzwerk Router)
      // Ignoriere 169.254.* (VirtualBox / APIPA Adressen)
      if (iface.family === 'IPv4' && !iface.internal && !iface.address.startsWith('169.254.')) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AUXBattle/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
  define: {
    '__LOCAL_IP__': JSON.stringify(getLocalIP())
  }
})
// trigger-reload-lucide

