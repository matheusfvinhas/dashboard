class Util {
    setItem = (key: string, value: string): void => {
        localStorage.setItem(key, value);
    };

    getItem = (key: string): string => {
        return localStorage.getItem(key) || '';
    };
}

export const LocalStorageUtil: Util = new Util();
