// eslint-disable-next-line import/prefer-default-export
export const prepareCountry = (c) => ({
  img: c.flags.png,
  name: c.name,
  // toDo: здесь пока дубль со свойствами! подумать: нужен ли этот массив свойств вложенный?
  region: c.region,
  info: [
    {
      title: 'Population',
      description: c.population.toLocaleString(),
    },
    {
      title: 'Region',
      description: c.region,
    },
    {
      title: 'Capital',
      description: c.capital,
    },
  ],
});
