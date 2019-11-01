import BaseService from '../../config/base.service';
import { IPage } from '../interfaces/page.interface';

class Service extends BaseService {
    getAll = async (): Promise<Array<IPage>> => {
        try {
            const { data }: { data: Array<IPage> } = await this.get('pages');
            return data;
        } catch (error) {
            throw error;
        }
    };
}

export const PageService: Service = new Service();
