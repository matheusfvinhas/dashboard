import { Component, Vue } from 'vue-property-decorator';
import WithRender from './toolbar.html';

@WithRender
@Component({ name: 'Toolbar' })
export default class ToolbarComponent extends Vue {}
