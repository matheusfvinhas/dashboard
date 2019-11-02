import { Component, Vue } from 'vue-property-decorator';
import { ChannelKeyEnum } from '../../shared/enums/channel-key.enum';
import { IChannel } from '../../shared/interfaces/channel.interface';
import { IPage } from '../../shared/interfaces/page.interface';
import { PageService } from '../../shared/services/page.service';
import WithRender from './home.view.html?style=./home.view.scss';

@WithRender
@Component({ name: 'Home' })
export default class HomeView extends Vue {
    pages: Array<IPage> = [];
    channels: Array<IChannel> = [
        {
            name: 'Facebook',
            channel_key: ChannelKeyEnum.FACEBOOK,
        },
        {
            name: 'Twitter',
            channel_key: ChannelKeyEnum.TWITTER,
        },
        {
            name: 'Instagram',
            channel_key: ChannelKeyEnum.INSTAGRAM,
        },
        {
            name: 'Google meu negócio',
            channel_key: ChannelKeyEnum.MEU_NEGOCIO,
        },
        {
            name: 'Pinterest',
            channel_key: ChannelKeyEnum.PINTEREST,
        },
        {
            name: 'Linkedin',
            channel_key: ChannelKeyEnum.LINKEDIN,
        },
        {
            name: 'Youtube',
            channel_key: ChannelKeyEnum.YOUTUBE,
        },
        {
            name: 'Whatsapp',
            channel_key: ChannelKeyEnum.WHATSAPP,
        },
        {
            name: 'Google analytics',
            channel_key: ChannelKeyEnum.ANALYTICS,
        },
    ];
    selectedChannel: ChannelKeyEnum = null;
    showModal: boolean = false;

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

    toggleModal(channelKey: ChannelKeyEnum = null): void {
        this.selectedChannel = channelKey;
        this.showModal = !this.showModal;
    }

    get channelsList(): Array<IPage> {
        return this.pages.filter((page: IPage) => page.channel_key === this.selectedChannel) || [];
    }
}
