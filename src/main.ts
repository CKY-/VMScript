import { Firebot, ScriptModules, IntegrationDefinition} from "@crowbartools/firebot-custom-scripts-types";
import { initLogger, logger } from "./logger";
import { integration, definition } from "./remote/voice-meeter"
//import { integration, definition } from "./remote/test-class";

interface Params {
  message: string;
  logging: boolean;
}

const script: Firebot.CustomScript<Params> = {

  getScriptManifest: () => {
    return {
      name: "VoiceMeeter Control",
      description: "VoiceMeeter Control",
      author: "CKY",
      version: "1.0",
      firebotVersion: "5",
    };
  },

  getDefaultParameters: () => {
    return {
      message: {
        type: "string",
        default: "Hello World!",
        description: "Message",
        secondaryDescription: "Enter a message here",
      },
      logging: {
        type: "boolean",
        default: false,
        description: "Enable logging for Voice Meeter",
      },
    };
  },

  run: (runRequest) => {

    const modules = runRequest.modules;
    const { logger } = modules;
    initLogger(modules.logger);
    logger.info(runRequest.parameters.message);

    const {
      effectManager,
      eventManager,
      frontendCommunicator,
      replaceVariableManager,
      eventFilterManager,
    } = modules;

    //modules.integrationManager.registerIntegration({ definition, integration });
    modules.integrationManager.registerIntegration({ definition, integration });
    // Integration.initRemote(
    //   {
    //     logging: runRequest.parameters.logging,
    //   },
    //   {
    //     eventManager,
    //   });
  },
};

export default script;

export let modules: ScriptModules = null;