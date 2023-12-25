import { registerEvents, VoiceMeeterConnect, VoiceMeeterDisconnect } from "./../firebot/events/voice-meeter-event";
import { logger } from "../logger";
import { IntegrationData, IntegrationDefinition } from "@crowbartools/firebot-custom-scripts-types";
import { EventEmitter } from "events";


// @ts-ignore
export const definition: IntegrationDefinition = {
    id: "voicemeeter",
    name: "VoiceMeeter",
    description: "VoiceMeeter events",
    connectionToggle: true,
    linkType: "other"
};

class voicemeeter extends EventEmitter {
    connected: boolean;
    constructor() {
        super();
    }

    init() {
        //registerEvents();
        //loadVariables();
    }
    
    connect() {
      
    }

    disconnect() {

    }
    // public initRemote({
    //     logging,
    // }: {
    //     logging: boolean;
    // },
    //     modules: {
    //         eventManager: ScriptModules["eventManager"];
    //     }
    // ) {
    //     eventManager = modules.eventManager;
    //     logger.info("event manager loaded");
    //     // this.connect();
    // }

}

export const integration = new voicemeeter();