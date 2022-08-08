export class StorageService {
  get(key: string) {
    if(typeof window!=="undefined"){
      return JSON.parse(window.localStorage.getItem(key));
    }
  }

  set(key: string, value: unknown) {
    if(typeof window!=="undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  remove(key: string) {
    if(typeof window!=="undefined") {
      window.localStorage.removeItem(key);
    }
  }
}
