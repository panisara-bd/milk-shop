export const HOST = 'https://tortellini.co/milk-shop';

export const getAllProducts = async () => {
  const response = await fetch(`${HOST}/api/products`);
  if (!response.ok) {
    return [];
  }
  const result = await response.json();
  return result;
};

export const searchProducts = async (query: string, types: string[], limit: number, offset: number) => {
  try {
    const typesQuery = types.length
      ? `&types[]=${types
          .map((type) => encodeURIComponent(type))
          .join('&types[]=')}`
      : '';

    const response = await fetch(
      `${HOST}/api/products/search?query=${query}${typesQuery}&limit=${limit}&offset=${offset}`
    );
    if (response.ok) {
      const results = await response.json();
      return results;
    } else {
      return [];
    }
  } catch (e) {
    console.error(e);
  }
};

export const fetchTypes = async () => {
  const response = await fetch(`${HOST}/api/products/types`);
  if (!response.ok) {
    return [];
  }
  const result = await response.json();
  return result;
};

export const fetchById = async (id: string) => {
  const response = await fetch(`${HOST}/api/products/${id}`);
  if (!response.ok) {
    return;
  }
  const result = await response.json();
  return result;
};
