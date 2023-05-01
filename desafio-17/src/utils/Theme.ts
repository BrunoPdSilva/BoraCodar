export const saveTheme = (isLightTheme: boolean) => {
  localStorage.setItem('isLightTheme', JSON.stringify(isLightTheme));
};

export const retrieveTheme = () => {
  const isLightTheme = localStorage.getItem('isLightTheme');
  return isLightTheme ? JSON.parse(isLightTheme) : {};
};