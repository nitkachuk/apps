
export const capitalizeFirstLetter = ( txt ) => {
    return txt[0].toUpperCase() + txt.slice(1);
}

export const tipStorage = () => {
    return !localStorage.getItem('tip') && true;
  }