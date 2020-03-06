'use babel';

import ReloadWorkspaceButtonView from './reload-workspace-button-view.js';

export default {

 reloadWorkspaceButtonView: null,

 deactivate() {
   this.reloadWorkspaceButtonView.destroy();
 },

 consumeStatusBar(statusBar) {
   this.reloadWorkspaceButtonView = new ReloadWorkspaceButtonView(statusBar);
 }

};
