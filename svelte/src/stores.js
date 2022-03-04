import { writable } from 'svelte/store';

export const logged_in_data = writable(localStorage.getItem('data'));
export const authentication = writable(false);
