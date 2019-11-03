import { Component, Prop, Vue } from 'vue-property-decorator';
import { ChannelKeyEnum } from '../../../../shared/enums/channel-key.enum';
import { IPage } from '../../../../shared/interfaces/page.interface';
import WithRender from './modal.html?style=./modal.scss';

@WithRender
@Component({ name: 'Modal' })
export default class ModalComponent extends Vue {
    @Prop({ type: String, default: null })
    selectedChannel: ChannelKeyEnum;

    @Prop({ type: Array, default: [] })
    channelsList: Array<IPage>;

    selectedPage: IPage = null;

    toggleModal(): void {
        this.$emit('toggleModal');
    }

    selectPage(): void {
        this.$emit('selectPage', this.selectedPage);
        this.selectedPage = null;
    }

    get hasSelectedPage(): boolean {
        return !!this.selectedPage && !!this.selectedPage.id;
    }

    get hasChannelsList(): boolean {
        return !!this.channelsList && !!this.channelsList.length;
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
                return 'WhatsApp';
            default:
                return '';
        }
    }
}
