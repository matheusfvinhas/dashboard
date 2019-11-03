import { Component, Vue } from 'vue-property-decorator';
import { ChannelKeyEnum } from '../../shared/enums/channel-key.enum';
import { IChannel } from '../../shared/interfaces/channel.interface';
import { IPage } from '../../shared/interfaces/page.interface';
import { PageService } from '../../shared/services/page.service';
import { LocalStorageUtil } from '../../utils/local-storage.util';
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
    connectedChannels: Array<IPage> = [];
    selectedChannel: ChannelKeyEnum = null;
    selectedPage: IPage = null;
    showModal: boolean = false;

    async mounted(): Promise<void> {
        await this.getAllPages();

        LocalStorageUtil.getItem('connectedChannels')
            .split(',')
            .forEach((item: string) =>
                this.connectedChannels.push({ ...this.pages.find((page: IPage) => page.id === parseInt(item)) })
            );
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

    selectPage(): void {
        this.connectedChannels.push({ ...this.selectedPage });
        LocalStorageUtil.setItem(
            'connectedChannels',
            this.connectedChannels.map((channel: IPage) => channel.id).toString()
        );
        this.selectedPage = null;
        this.toggleModal();
    }

    isConnected(channel: IChannel): boolean {
        return this.connectedChannels.some((c: IChannel) => c.channel_key === channel.channel_key);
    }

    getConnectedChannelName(channel: IChannel): string {
        const selectedChannel = this.connectedChannels.find((c: IChannel) => c.channel_key === channel.channel_key);
        return (!!selectedChannel && selectedChannel.name) || '';
    }

    get channelsList(): Array<IPage> {
        return this.pages.filter((page: IPage) => page.channel_key === this.selectedChannel) || [];
    }

    get seletedChannelTitle(): string {
        switch (this.selectedChannel) {
            case ChannelKeyEnum.FACEBOOK:
                return 'Facebook';
            case ChannelKeyEnum.MEU_NEGOCIO:
                return 'Google Meu Negócio';
            case ChannelKeyEnum.TWITTER:
                return 'Twitter';
            case ChannelKeyEnum.INSTAGRAM:
                return 'Instagram';
            case ChannelKeyEnum.ANALYTICS:
                return 'Google Analytics';
            case ChannelKeyEnum.YOUTUBE:
                return 'Youtube';
            case ChannelKeyEnum.PINTEREST:
                return 'Pinterest';
            case ChannelKeyEnum.LINKEDIN:
                return 'Linkedin';
            case ChannelKeyEnum.WHATSAPP:
                return 'Whatsapp';
            default:
                return '';
        }
    }

    get hasSelectedPage(): boolean {
        return !!this.selectedPage && !!this.selectedPage.id;
    }

    get hasChannelsList(): boolean {
        return !!this.channelsList && !!this.channelsList.length;
    }
}
