const categoryList = [
  {
    title: 'Sắp xếp',
    isRadio: true,
    label: [
      { name: 'Mặc định', value: 'default' },
      { name: 'Tên A-Z', value: 'sortAZ' },
      { name: 'Tên Z-A', value: 'sortZA' },
      { name: 'Giá thấp đến cao', value: 'asc' },
      { name: 'Giá cao đến thấp', value: 'desc' },
    ],
  },
  {
    title: 'Loại',
    isCheckBox: true,
    label: ['Giày MLB'],
  },
  {
    title: 'Nhà phân phối',
    isCheckBox: true,
    label: ['MLB Việt Nam'],
  },
];

export { categoryList };
