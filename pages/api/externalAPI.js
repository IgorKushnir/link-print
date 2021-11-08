import axios from 'axios';

const formURL = 'https://formspree.io/f/mvodnvng'

export const sendContantForm = (formData) => axios.post(formURL, formData)