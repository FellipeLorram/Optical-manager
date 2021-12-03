import axios from '../../services/axios';

export async function save(id, object) {
  const response = await axios.post(`/clients/${id}/new-sell`, object);
  return response.data._id;
}
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
export const FormatDate = (date) => new Date(date).toLocaleDateString('pt-BR', options);
