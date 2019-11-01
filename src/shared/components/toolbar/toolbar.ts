import { Component, Vue } from 'vue-property-decorator';
import WithRender from './toolbar.html';

@WithRender
@Component
export default class ToolbarComponent extends Vue {}
