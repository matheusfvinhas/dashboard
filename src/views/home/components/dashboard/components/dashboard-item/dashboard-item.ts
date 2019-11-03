import { Component, Prop, Vue } from 'vue-property-decorator';
import { IChannel } from '../../../../../../shared/interfaces/channel.interface';
import { IPage } from '../../../../../../shared/interfaces/page.interface';
import WithRender from './dashboard-item.html?style=./dashboard-item.scss';

@WithRender
@Component({ name: 'DashboardItem' })
export default class DashboardItemComponent extends Vue {
    @Prop({ type: Array, default: [] })
    connectedChannels: Array<IPage>;

    @Prop({ type: Object, default: {} })
    channel: IChannel;

    toggleModal(): void {
        this.$emit('toggleModal', this.channel.channel_key);
    }

    get isConnected(): boolean {
        return this.connectedChannels.some((c: IChannel) => c.channel_key === this.channel.channel_key);
    }

    get connectedChannelName(): string {
        const selectedChannel: IPage = this.connectedChannels.find(
            (c: IChannel) => c.channel_key === this.channel.channel_key
        );
        return (!!selectedChannel && selectedChannel.name) || '';
    }
}
