import { modules } from "../../main";

const EVENT_SOURCE = {
    id: "voicemeeter",
    name: "VoiceMeeter",
    description: "VoiceMeeter Events",
    events: [
        {
            id: "connect",
            name: "VoiceMeeter Connected",
            description: "Allows for Firebot to communicate directly to VoiceMeeter",
            isIntegration: true,
            activityFeed: {
                icon: "fad fa-volume",
            }
        },
        {
            id: "disconnect",
            name: "VoiceMeeter Disconnected",
            description: "Allows for Firebot to communicate directly to VoiceMeeter",
            isIntegration: true,
            activityFeed: {
                icon: "fad fa-volume-xmark",
            }
        }
    ]
}

export function registerEvents() {
    modules.eventManager.registerEventSource(EVENT_SOURCE);
}

export function VoiceMeeterConnect(connection: boolean) {
    modules.eventManager.triggerEvent("voicemeeter", "connect", { connection: connection });
}

export function VoiceMeeterDisconnect(connection: boolean) {
    modules.eventManager.triggerEvent("voicemeeter", "disconnect", { connection: connection });
}