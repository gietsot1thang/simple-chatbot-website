import request from './request';

export default {
  getProducts: () => request(`option?type=product`),
  getModules: id => request(`option?type=module&id=${id}`),
  getOptions: id => request(`option?type=option&id=${id}`),
  getData: (product, item, option, subject) => {
    return request(`faq?platform=${product}&module=${item}&option=${option}`)
  },
  queryAgent: (query) => request(`agent?q=${query}`),
}
