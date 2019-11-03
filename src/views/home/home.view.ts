import { Component, Vue } from 'vue-property-decorator';
import { ChannelKeyEnum } from '../../shared/enums/channel-key.enum';
import { IPage } from '../../shared/interfaces/page.interface';
import { PageService } from '../../shared/services/page.service';
import { LocalStorageUtil } from '../../utils/local-storage.util';
import WithRender from './home.view.html';

@WithRender
@Component({
    name: 'Home',
    components: {
        modal: (): Promise<any> => import('./components/modal').then((c: any) => c.default),
        dashboard: (): Promise<any> => import('./components/dashboard').then((c: any) => c.default),
    },
})
export default class HomeView extends Vue {
    pages: Array<IPage> = [];
    connectedChannels: Array<IPage> = [];
    selectedChannel: ChannelKeyEnum = null;
    showModal: boolean = false;

    async mounted(): Promise<void> {
        await this.getAllPages();

        LocalStorageUtil.getItem('connectedChannels')
            .split(',')
            .forEach((item: string) => {
                if (!!item)
                    this.connectedChannels.push({ ...this.pages.find((page: IPage) => page.id === parseInt(item)) });
            });
    }

    async getAllPages(): Promise<void> {
        try {
            this.pages = await PageService.getAll();
        } catch (error) {
            console.log(error);
        }
    }

    toggleModal(channelKey: ChannelKeyEnum = null): void {
        this.selectedChannel = channelKey;
        this.showModal = !this.showModal;
    }

    selectPage(selectedPage: IPage): void {
        this.connectedChannels.push({ ...selectedPage });
        LocalStorageUtil.setItem(
            'connectedChannels',
            this.connectedChannels.map((channel: IPage) => channel.id).toString()
        );
        this.toggleModal();
    }

    get channelsList(): Array<IPage> {
        return this.pages.filter((page: IPage) => page.channel_key === this.selectedChannel) || [];
    }
}
