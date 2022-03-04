import { writable } from 'svelte/store';

export const token_staff = writable(localStorage.getItem('token_staff'));
export const token_customer = writable(localStorage.getItem('token_customer'));