import debug, { IDebugger } from 'debug';

export type KunaDebug = (message?: any, ...optionalParams: any[]) => void;

export function create(key: string): IDebugger {
    return debug('kuna-sdk:' + key);
}
