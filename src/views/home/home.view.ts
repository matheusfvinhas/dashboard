import { Component, Vue } from 'vue-property-decorator';
import { IPage } from '../../shared/interfaces/page.interface';
import { PageService } from '../../shared/services/page.service';
import WithRender from './home.view.html?style=./home.view.scss';

@WithRender
@Component({ name: 'Home' })
export default class HomeView extends Vue {
    pages: Array<IPage> = [];

    mounted(): void {
        this.getAllPages();
    }

    async getAllPages(): Promise<void> {
        try {
            this.pages = await PageService.getAll();
        } catch (error) {
            console.log(error);
        }
    }
}
