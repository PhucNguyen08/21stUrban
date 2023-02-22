const getAllProvinces = async () => {
  const response = await fetch('https://provinces.open-api.vn/api/p/');
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not District');
  }

  return data;
};

const getAllDistricts = async provincesCode => {
  const response = await fetch(
    `https://provinces.open-api.vn/api/p/${provincesCode}?depth=2`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not District');
  }

  return data;
};

const getAllWards = async districtCode => {
  const response = await fetch(
    `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not Wards');
  }

  return data;
};

export { getAllProvinces, getAllDistricts, getAllWards };
