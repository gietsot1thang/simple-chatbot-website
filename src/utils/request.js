export default async function askRequest(path, config = {}) {
  const BASE_URL = 'https://your-domain/api/';
  const _config = Object.assign({}, config, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return new Promise((resolve, reject) => {
    return fetch(`${BASE_URL}${path}`, _config)
    .then(res => res.json())
    .then(data => resolve({ data, error: null }))
    .catch(error => reject({ data: null, error: error }));
  });
}
