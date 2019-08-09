import pusher from 'pusher-js';
import { KunaApiV3BaseInterface } from '../types';

const KUNA_PUSHER_KEY = '4b6a8b2c758be4e58868';
const KUNA_PUSHER_HOST = 'pusher.kuna.io';

export default class PusherProvider {

    protected pusher: pusher.Pusher;
    protected client: KunaApiV3BaseInterface;

    public constructor(PusherBuilder: pusher.PusherStatic, client: KunaApiV3BaseInterface) {
        this.client = client;
        this.pusher = new PusherBuilder(KUNA_PUSHER_KEY, {
            encrypted: true,
            wsHost: KUNA_PUSHER_HOST,
            wsPort: 443,
            wssPort: 443,
            enabledTransports: ['ws', 'wss'],
        });
    }

    public instance(): Pusher.Pusher {
        return this.pusher;
    }

    public bindGlobal(event: string, callback: Pusher.EventCallback, context?: any) {
        const channel = this.getChannel('market-global');

        channel.bind(event, callback, context);

        return this;
    }

    public unbindGlobal(event?: string, callback?: Pusher.EventCallback, context?: any) {
        const channel = this.getChannel('market-global');

        channel.unbind(event, callback, context);

        return this;
    }

    public bindMarket(market: string, event: string, callback: Pusher.EventCallback, context?: any) {
        const channel = this.getChannel(`market-${market}-global`);

        channel.bind(event, callback, context);

        return this;
    }

    public unbindMarket(market: string, event?: string, callback?: Pusher.EventCallback, context?: any) {
        const channel = this.getChannel(`market-${market}-global`);

        channel.unbind(event, callback, context);

        return this;
    }

    public getChannel(channelName: string) {
        let channel = this.pusher.channel(channelName);
        if (!channel) {
            channel = this.pusher.subscribe(channelName);
        }

        return channel;
    }
}
