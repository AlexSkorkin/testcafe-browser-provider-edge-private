import childProc from 'child_process';
import browserTools from 'testcafe-browser-tools';

export default {
    // Multiple browsers support
    isMultiBrowser: false,


    // Required - must be implemented
    // Browser control
    async openBrowser (id, pageUrl) {
        var browserInfo = {
            winOpenCmdTemplate: 'start shell:AppsFolder\\Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge -private ' + pageUrl
        };

        await childProc.exec(browserInfo.winOpenCmdTemplate);

        await this.waitForConnectionReady(id);
    },

    async closeBrowser (id) {
        await browserTools.close(id);
    },

    // Optional - implement methods you need, remove other methods
    // Initialization
    async init () {
        return;
    },

    async dispose () {
        return;
    },

    // Extra methods
    async resizeWindow (/* id, width, height, currentWidth, currentHeight */) {
        this.reportWarning('The window resize functionality is not supported by the "edge-private" browser provider.');
    },

    async takeScreenshot (/* id, screenshotPath, pageWidth, pageHeight */) {
        this.reportWarning('The screenshot functionality is not supported by the "edge-private" browser provider.');
    }
};
