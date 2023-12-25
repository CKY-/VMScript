import { BusParamName, InterfaceType, VoiceMeeter, VoiceMeeterType, StripParamName, OutParamData, InParam, VoiceMeeterInfo } from "ts-easy-voicemeeter-remote";
import { registerEvents, VoiceMeeterConnect, VoiceMeeterDisconnect } from "./../firebot/events/voice-meeter-event";
import { Firebot, ScriptModules, IntegrationData, IntegrationDefinition } from "@crowbartools/firebot-custom-scripts-types";
import { logger } from "../logger";
import { EventEmitter } from "events";

// @ts-ignore
export const definition: IntegrationDefinition = {
    id: "voicemeeter",
    name: "VoiceMeeter",
    description: "VoiceMeeter events",
    connectionToggle: true,
    linkType: "other"
};

class voicemeeterRemote extends EventEmitter {


    voicemeeter = new VoiceMeeter();
    connected: boolean;
    constructor() {
        super();
    }

    init() {
        registerEvents();
        //loadVariables();
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
    //     logging = logging ?? false;
    //    // this.connect();
    // }

    connect() {
        // this.voicemeeter.init().then(() => {
        //     this.voicemeeter.login();
        // });
        //  logger.debug("VoiceMeeter Connected:", this.getVoiceMeeterInfo())
    }

    disconnect() {
        // if (this.voicemeeter.isConnected) {
        //     this.voicemeeter.logout();
        // }
        // logger.debug("VoiceMeeter Disconnected:", this.getVoiceMeeterInfo())
    }

    // public getVoiceMeeterInfo(): VoiceMeeterInfo {
    // return this.voicemeeter.getVoiceMeeterInfo();
    // }
    /* 
        public runVoiceMeeter(voiceMeeterType: VoiceMeeterType): void {
            voicemeeter.runVoiceMeeter(voiceMeeterType)
        }
    
        static getStringParameter(voiceMeeter: VoiceMeeter, parameterName: string): string {
            return;
        }
    
        static getParameter(voiceMeeter: VoiceMeeter, parameterName: string): number {
            return;
        }
    
    
        // TODO: review this function and what it should do
        // Test if we have an active connection to a running instance of VoiceMeeter 
        public testConnection(): boolean {
            
            return;
        }
    
        public updateDeviceList() {
    
        }
    
        public sendRawParameterScript(scriptString: string) {
    
        }
    
        private _setParameter(type: InterfaceType, name: string, id: number, value: boolean | number | string) {
    
        }
    
        public setStripParameter(name: StripParamName, id: number, value: boolean | number | string) {
    
        }
    
        public setBusParameter(name: BusParamName, id: number, value: boolean | number | string) {
    
        }
    
        public getLevel(type: number, channel: number | undefined): number {
            return;
        }
    
        public getMidi() {
    
        }
    
        public getLevelByID(m: number, index: number) {
    
        }
    
        public async getAllParameters(): Promise<OutParamData> {
            return;
        }
        public async getMultiParameter(param: InParam[]): Promise<OutParamData> {
            return;
        }
    
    
        public isMacroButtonDirty() {
    
        }
    
        public getMacroButtonStatus(index: number): number {
            return;
        }
    
        /**
         *
         * @param index The logical ID of the macro button
         * @param value Button state 0 or 1
         * @returns 0 = success
         * /
        public setMacroButtonStatus(index: number, value: number) {
    
        }
    
        public toggleMacroButtonStatus(index: number) {
    
        } 
        */
}

export const integration = new voicemeeterRemote();