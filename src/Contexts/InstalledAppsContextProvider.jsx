import React, { useEffect, useState } from 'react';
import { InstalledAppsContext } from './InstalledAppsContext';

const INSTALLED_APPS_STORAGE_KEY = "demo-app-store-installed-apps";

const InstalledAppsContextProvider = ({children}) => {
    
      const [installedApps, setInstalledApps] = useState(() => {
        const savedInstalledApps = localStorage.getItem(INSTALLED_APPS_STORAGE_KEY);

        if (!savedInstalledApps) {
          return [];
        }

        try {
          const parsedInstalledApps = JSON.parse(savedInstalledApps);
          return Array.isArray(parsedInstalledApps) ? parsedInstalledApps : [];
        } catch {
          return [];
        }
      });

      useEffect(() => {
        localStorage.setItem(INSTALLED_APPS_STORAGE_KEY, JSON.stringify(installedApps));
      }, [installedApps]);

    return (
        <InstalledAppsContext value={[installedApps, setInstalledApps]}>
            {children}
        </InstalledAppsContext>
    );
};

export default InstalledAppsContextProvider;
