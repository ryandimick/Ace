"use strict";

import Ace from "../ace";
import Plugin, { PluginDescription } from "../plugin";

const PLUGINS: PluginDescription[] = [{
    name: "hello-world",
    version: "0.1.0",
    description: "Hello, world!",
    setup() {
        this.preinit("rcp-fe-viewport", () => console.debug("Viewport pre-init"));
        this.postinit("rcp-fe-viewport", () => console.debug("Viewport post-init"));
        return "Hello, world!";
    }
}];

export default function register(ace: Ace) {
    PLUGINS.forEach(des => {
        const inst = new Plugin(ace, des);
        ace.registerPlugin(inst);
    });
}