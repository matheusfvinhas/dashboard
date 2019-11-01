import { Component, Vue } from 'vue-property-decorator';
import WithRender from './app.html?style=./app.scss';

@WithRender
@Component({
    name: 'App',
    components: {
        home: (): Promise<any> => import('../home').then((c: any) => c.default),
    },
})
export default class App extends Vue {}
