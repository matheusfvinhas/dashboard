import { Component, Vue } from 'vue-property-decorator';
import { ToolbarItemKeyEnum } from '../../enums/toolbar-item-key.enum copy';
import { IToolbarItem } from '../../interfaces/toolbar-item.interface';
import WithRender from './toolbar.html?style=./toolbar.scss';

@WithRender
@Component({ name: 'Toolbar' })
export default class ToolbarComponent extends Vue {
    items: Array<IToolbarItem> = [
        { name: 'Dashboard', key: ToolbarItemKeyEnum.DASHBOARD },
        { name: 'Agendar Post', key: ToolbarItemKeyEnum.AGENDAR_POST },
        { name: 'Calendário', key: ToolbarItemKeyEnum.CALENDAR },
        { name: 'Inbox', key: ToolbarItemKeyEnum.INBOX },
        { name: 'Feed', key: ToolbarItemKeyEnum.FEED },
        { name: 'Workflow', key: ToolbarItemKeyEnum.WORKFLOW },
        { name: 'Acompanhamento', key: ToolbarItemKeyEnum.ACOMPANHAMENTO },
        { name: 'Relatórios', key: ToolbarItemKeyEnum.RELATORIOS },
    ];
    selectedItem: ToolbarItemKeyEnum = ToolbarItemKeyEnum.DASHBOARD;
    time: string = null;
    showNav: boolean = null;

    created(): void {
        this.setTime();

        setInterval(() => {
            this.setTime();
        }, 1000);
    }

    isActive(key: ToolbarItemKeyEnum): boolean {
        return this.selectedItem === key;
    }

    selectItem(key: ToolbarItemKeyEnum): void {
        this.selectedItem = key;
    }

    setTime(): void {
        this.time = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    }
}
