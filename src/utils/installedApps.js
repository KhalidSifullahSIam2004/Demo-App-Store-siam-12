export const getInstalledAppsDetails = (installedApps, allApps) =>
  installedApps.reduce((appsList, installedApp) => {
    const installedAppId =
      typeof installedApp === "object" ? installedApp.id : installedApp;

    if (!installedAppId) {
      return appsList;
    }

    const matchedApp =
      allApps.find((singleApp) => singleApp.id === installedAppId) ??
      (typeof installedApp === "object" ? installedApp : null);

    if (!matchedApp || appsList.some((singleApp) => singleApp.id === matchedApp.id)) {
      return appsList;
    }

    appsList.push(matchedApp);
    return appsList;
  }, []);

export const isInstalledApp = (installedApps, appId) =>
  installedApps.some(
    (installedApp) =>
      (typeof installedApp === "object" ? installedApp.id : installedApp) === appId
  );
