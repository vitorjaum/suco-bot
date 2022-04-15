import { tmiClient } from '../clients/tmi';
import 'dotenv/config';
import type { Userstate } from 'tmi.js';

type Color =
  | 'Blue'
  | 'Coral'
  | 'DodgerBlue'
  | 'SpringGreen'
  | 'YellowGreen'
  | 'Green'
  | 'OrangeRed'
  | 'Red'
  | 'GoldenRod'
  | 'HotPink'
  | 'CadetBlue'
  | 'SeaGreen'
  | 'Chocolate'
  | 'BlueViolet'
  | 'Firebrick';

const channel = process.env.TWITCH_CHANNEL || '';

export const send = (str: string, color: Color = 'SpringGreen') => {
  tmiClient.say(channel, `/color ${color}`);
  tmiClient.say(channel, str);
};

export const reply = (
  user: Userstate,
  str: string,
  color: Color = 'SpringGreen'
) => {
  send(`@${user.username}, ${str}`, color);
};

export const sendError = (str: string) => {
  send(str, 'Red');
};

export const replyError = (user: Userstate, str: string) => {
  send(`/me @${user.username}, ${str}`, 'Red');
};

export const sendStriped = (msgs: string[], color1: Color, color2: Color) => {
  msgs.forEach((msg, i) => {
    const color = (i + 1) % 2 == 0 ? color1 : color2;
    send(`/me ${msg}`, color);
  });
};
