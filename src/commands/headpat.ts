import { send } from '../utils';
import type { Command } from '.';

export const headpat: Command = {
  aliases: ['headpat', ],
  exec: async (input, args, user) => {
    send(
      `@${user.username} faz headpat em ${args.join(' ')} 02Pat.`
    );
  },
};
