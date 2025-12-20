export const getInstalledApps = () => {
  const installed = localStorage.getItem("installedApps");
  return installed ? JSON.parse(installed).map(String) : [];
};

export const saveInstalledApp = (appId) => {
  const idStr = String(appId);
  const installed = getInstalledApps();
  if (!installed.includes(idStr)) {
    installed.push(idStr);
    localStorage.setItem("installedApps", JSON.stringify(installed));
  }
};

export const removeInstalledApp = (appId) => {
  const idStr = String(appId);
  const installed = getInstalledApps();
  const filtered = installed.filter((id) => id !== idStr);
  localStorage.setItem("installedApps", JSON.stringify(filtered));
};

export const isAppInstalled = (appId) => {
  return getInstalledApps().includes(String(appId));
};
