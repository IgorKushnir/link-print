import axios from 'axios';

const formURL = 'https://formspree.io/f/xayangzo'

export const sendContantForm = (formData) => axios.post(formURL, formData)