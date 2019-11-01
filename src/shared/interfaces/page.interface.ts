import { ChannelKeyEnum } from '../enums/channel-key.enum';

export interface IPage {
    id: number;
    name: string;
    url: string;
    picture: string;
    channel_key: ChannelKeyEnum;
}
