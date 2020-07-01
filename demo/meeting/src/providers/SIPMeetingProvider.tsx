import React, { ReactNode } from 'react';
import { useMeetingManager } from '../../../../src';
import MeetingManager from '../../../../src/providers/MeetingProvider/MeetingManager';

import { AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER } from '../constants';

export class SIPMeetingManager {
  private meetingManager: MeetingManager | null;

  private region: string;

  constructor(theMeetingManager: MeetingManager | null) {
    this.meetingManager = theMeetingManager;
    this.region = this.meetingManager?.region || 'us-east-1';
  }

  getSIPURI = async (
    meetingId: string,
    voiceConnectorId: string
  ): Promise<string> => {
    try {
      const json = await this.meetingManager?.joinMeeting(
        meetingId,
        AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER,
        this.region
      );
      const joinToken = json.JoinInfo.Attendee.JoinToken;
      return `sip:${AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER}@${voiceConnectorId};transport=tls;X-joinToken=${joinToken}`;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const SIPMeetingContext = React.createContext<SIPMeetingManager | null>(
  null
);

type Props = {
  children: ReactNode;
};

export default function SIPMeetingProvider({ children }: Props) {
  const meetingManager = useMeetingManager();
  const sipMeeting = new SIPMeetingManager(meetingManager);

  return (
    <SIPMeetingContext.Provider value={sipMeeting}>
      {children}
    </SIPMeetingContext.Provider>
  );
}
