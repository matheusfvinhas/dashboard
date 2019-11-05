import { Component, Prop, Vue } from 'vue-property-decorator';
import { ChannelKeyEnum } from '../../../../shared/enums/channel-key.enum';
import { IChannel } from '../../../../shared/interfaces/channel.interface';
import { IPage } from '../../../../shared/interfaces/page.interface';
import WithRender from './dashboard.html?style=./dashboard.scss';

@WithRender
@Component({
    name: 'Dashboard',
    components: {
        'dashboard-item': (): Promise<any> => import('./components/dashboard-item').then((c: any) => c.default),
    },
})
export default class DashboardComponent extends Vue {
    @Prop({ type: Array, default: [] })
    connectedChannels: Array<IPage>;

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

    toggleModal(channelKey: ChannelKeyEnum): void {
        this.$emit('toggleModal', channelKey);
    }
}
